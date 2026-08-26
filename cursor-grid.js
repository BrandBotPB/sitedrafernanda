/* CursorGrid — cells light up around the pointer (adapted from React Bits, no React) */
(function () {
  if (customElements.get('cursor-grid')) return;

  const CURVES = { linear: t => t, smooth: t => t * t * (3 - 2 * t), sharp: t => t * t * t };
  const hexToRgb = hex => {
    const h = hex.replace('#', '');
    const v = h.length === 3 ? h.split('').map(c => c + c).join('') : h;
    const n = parseInt(v.slice(0, 6), 16);
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  };

  class CursorGrid extends HTMLElement {
    connectedCallback() {
      if (this._canvas) return;
      this.style.display = 'block';
      this.style.width = '100%';
      this.style.height = '100%';
      this.style.overflow = 'hidden';
      const canvas = document.createElement('canvas');
      canvas.style.display = 'block';
      canvas.style.width = '100%';
      canvas.style.height = '100%';
      this.appendChild(canvas);
      this._canvas = canvas;

      const num = (a, d) => { const v = parseFloat(this.getAttribute(a)); return isNaN(v) ? d : v; };
      const p = {
        cellSize: num('cell-size', 70), color: this.getAttribute('color') || '#FFFFFF',
        radius: num('radius', 150), falloff: this.getAttribute('falloff') || 'smooth',
        holdTime: num('hold-time', 400), fadeDuration: num('fade-duration', 900),
        lineWidth: num('line-width', 1), maxOpacity: num('max-opacity', 1),
        fillOpacity: num('fill-opacity', 0), gridOpacity: num('grid-opacity', 0),
        cellRadius: num('cell-radius', 0), clickPulse: this.getAttribute('click-pulse') !== 'false',
        pulseSpeed: num('pulse-speed', 620)
      };
      const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      const ctx = canvas.getContext('2d');
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      let cols = 0, rows = 0, offX = 0, offY = 0, w = 0, h = 0, raf = 0, running = false, lastFrame = 0;
      let alphas = new Float32Array(0), touched = new Float64Array(0);
      const pulses = [];
      const [cr, cg, cb] = hexToRgb(p.color);

      const rebuild = () => {
        w = this.offsetWidth; h = this.offsetHeight;
        if (!w || !h) return;
        canvas.width = Math.max(1, Math.round(w * dpr));
        canvas.height = Math.max(1, Math.round(h * dpr));
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        cols = Math.ceil(w / p.cellSize) + 1;
        rows = Math.ceil(h / p.cellSize) + 1;
        offX = (w - cols * p.cellSize) / 2;
        offY = (h - rows * p.cellSize) / 2;
        alphas = new Float32Array(cols * rows);
        touched = new Float64Array(cols * rows);
      };
      const cx_ = i => offX + (i % cols) * p.cellSize + p.cellSize / 2;
      const cy_ = i => offY + Math.floor(i / cols) * p.cellSize + p.cellSize / 2;

      const energize = (x, y) => {
        const r = Math.max(p.radius, 1);
        const ease = CURVES[p.falloff] || CURVES.linear;
        const now = performance.now();
        const minC = Math.max(0, Math.floor((x - r - offX) / p.cellSize));
        const maxC = Math.min(cols - 1, Math.floor((x + r - offX) / p.cellSize));
        const minR = Math.max(0, Math.floor((y - r - offY) / p.cellSize));
        const maxR = Math.min(rows - 1, Math.floor((y + r - offY) / p.cellSize));
        for (let row = minR; row <= maxR; row++) {
          for (let col = minC; col <= maxC; col++) {
            const i = row * cols + col;
            const d = Math.hypot(cx_(i) - x, cy_(i) - y);
            if (d > r) continue;
            const level = ease(1 - d / r) * p.maxOpacity;
            if (level > alphas[i]) { alphas[i] = level; touched[i] = now; }
            else if (level > 0) touched[i] = now;
          }
        }
      };

      const draw = now => {
        const dt = Math.min(now - lastFrame, 50);
        lastFrame = now;
        ctx.clearRect(0, 0, w, h);
        if (p.gridOpacity > 0) {
          ctx.strokeStyle = `rgba(${cr},${cg},${cb},${p.gridOpacity})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          for (let c = 0; c <= cols; c++) { const x = Math.round(offX + c * p.cellSize) + 0.5; ctx.moveTo(x, 0); ctx.lineTo(x, h); }
          for (let r = 0; r <= rows; r++) { const y = Math.round(offY + r * p.cellSize) + 0.5; ctx.moveTo(0, y); ctx.lineTo(w, y); }
          ctx.stroke();
        }
        for (let pi = pulses.length - 1; pi >= 0; pi--) {
          const pu = pulses[pi];
          const ringR = ((now - pu.t0) / 1000) * p.pulseSpeed;
          if (ringR > Math.hypot(w, h)) { pulses.splice(pi, 1); continue; }
          const band = p.cellSize;
          const minC = Math.max(0, Math.floor((pu.x - ringR - band - offX) / p.cellSize));
          const maxC = Math.min(cols - 1, Math.floor((pu.x + ringR + band - offX) / p.cellSize));
          const minR = Math.max(0, Math.floor((pu.y - ringR - band - offY) / p.cellSize));
          const maxR = Math.min(rows - 1, Math.floor((pu.y + ringR + band - offY) / p.cellSize));
          for (let row = minR; row <= maxR; row++) {
            for (let col = minC; col <= maxC; col++) {
              const i = row * cols + col;
              const d = Math.hypot(cx_(i) - pu.x, cy_(i) - pu.y);
              if (Math.abs(d - ringR) < band / 2 && p.maxOpacity > alphas[i]) { alphas[i] = p.maxOpacity; touched[i] = now; }
            }
          }
        }
        let visible = pulses.length > 0;
        const fadeStep = dt / Math.max(p.fadeDuration, 16);
        const half = p.cellSize / 2;
        for (let i = 0; i < alphas.length; i++) {
          let a = alphas[i];
          if (a <= 0) continue;
          if (now - touched[i] > p.holdTime) {
            a = Math.max(0, a - fadeStep);
            alphas[i] = a;
            if (a <= 0) continue;
          }
          visible = true;
          const cx = cx_(i), cy = cy_(i);
          const g = ctx.createRadialGradient(cx, cy, half * 0.1, cx, cy, p.cellSize);
          g.addColorStop(0, `rgba(${cr},${cg},${cb},${a})`);
          g.addColorStop(1, `rgba(${cr},${cg},${cb},0)`);
          ctx.beginPath();
          const x = cx - half + 0.5, y = cy - half + 0.5, s = p.cellSize - 1;
          if (p.cellRadius > 0 && ctx.roundRect) ctx.roundRect(x, y, s, s, p.cellRadius); else ctx.rect(x, y, s, s);
          if (p.fillOpacity > 0) { ctx.fillStyle = `rgba(${cr},${cg},${cb},${a * p.fillOpacity})`; ctx.fill(); }
          ctx.strokeStyle = g;
          ctx.lineWidth = p.lineWidth;
          ctx.stroke();
        }
        if (visible) raf = requestAnimationFrame(draw);
        else { running = false; if (p.gridOpacity <= 0) ctx.clearRect(0, 0, w, h); }
      };

      const wake = () => { if (running) return; running = true; lastFrame = performance.now(); raf = requestAnimationFrame(draw); };
      const local = e => {
        const r = canvas.getBoundingClientRect();
        if (!r.width || e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) return null;
        return [e.clientX - r.left, e.clientY - r.top];
      };
      this._onMove = e => { if (reduced) return; const c = local(e); if (!c) return; energize(c[0], c[1]); wake(); };
      this._onDown = e => { if (reduced || !p.clickPulse) return; const c = local(e); if (!c) return; pulses.push({ x: c[0], y: c[1], t0: performance.now() }); wake(); };
      window.addEventListener('pointermove', this._onMove, { passive: true });
      window.addEventListener('pointerdown', this._onDown, { passive: true });
      this._ro = new ResizeObserver(() => { rebuild(); wake(); });
      this._ro.observe(this);
      rebuild();
      if (p.gridOpacity > 0) wake();
    }
    disconnectedCallback() {
      if (this._ro) this._ro.disconnect();
      window.removeEventListener('pointermove', this._onMove);
      window.removeEventListener('pointerdown', this._onDown);
    }
  }
  customElements.define('cursor-grid', CursorGrid);
})();
