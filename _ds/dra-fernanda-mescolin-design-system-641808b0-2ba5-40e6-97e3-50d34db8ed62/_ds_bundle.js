/* @ds-bundle: {"format":4,"namespace":"DraFernandaMescolinDesignSystem_641808","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"Accordion","sourcePath":"components/disclosure/Accordion.jsx"},{"name":"Badge","sourcePath":"components/feedback/Badge.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Card","sourcePath":"components/layout/Card.jsx"}],"sourceHashes":{"components/buttons/Button.jsx":"3ba9e42a5310","components/disclosure/Accordion.jsx":"b75e2dde2dd0","components/feedback/Badge.jsx":"31163a7ac312","components/forms/Input.jsx":"d2ee6415e337","components/layout/Card.jsx":"1e0c34031323"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DraFernandaMescolinDesignSystem_641808 = window.DraFernandaMescolinDesignSystem_641808 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  style,
  ...props
}) {
  const sm = size === 'sm';
  const base = {
    fontFamily: 'var(--font-sans-body)',
    fontWeight: 300,
    fontSize: sm ? '10px' : '11px',
    letterSpacing: '0.24em',
    textTransform: 'uppercase',
    padding: sm ? '12px 26px' : '17px 40px',
    borderRadius: 'var(--radius-pill)',
    border: '1px solid transparent',
    background: 'transparent',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'background-color 800ms cubic-bezier(.22,1,.36,1), color 800ms cubic-bezier(.22,1,.36,1), border-color 800ms cubic-bezier(.22,1,.36,1), opacity 800ms',
    opacity: disabled ? 0.35 : 1
  };
  const variants = {
    primary: {
      background: 'var(--color-navy)',
      color: 'var(--color-white)',
      borderColor: 'var(--color-navy)'
    },
    secondary: {
      color: 'var(--color-navy)',
      borderColor: 'var(--color-sand-300)'
    },
    accent: {
      background: 'var(--color-burgundy-mark)',
      color: 'var(--color-white)',
      borderColor: 'var(--color-burgundy-mark)'
    },
    quiet: {
      color: 'var(--color-navy)',
      padding: sm ? '4px 0' : '6px 0',
      borderRadius: 0,
      borderBottom: '1px solid var(--color-sand-300)',
      letterSpacing: '0.2em'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    style: {
      ...base,
      ...variants[variant],
      ...style
    },
    disabled: disabled
  }, props), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/disclosure/Accordion.jsx
try { (() => {
function Accordion({
  items = [],
  defaultOpen = -1
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  const listStyle = {
    display: 'flex',
    flexDirection: 'column',
    borderTop: '1px solid var(--color-border)'
  };
  const rowStyle = {
    borderBottom: '1px solid var(--color-border)'
  };
  const btnStyle = {
    width: '100%',
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    gap: '24px',
    background: 'transparent',
    border: 'none',
    padding: '26px 0',
    textAlign: 'left',
    cursor: 'pointer',
    fontFamily: 'var(--font-sans-body)',
    fontWeight: 300,
    fontSize: '16px',
    color: 'var(--color-text-primary)'
  };
  const signStyle = {
    color: 'var(--color-taupe-500)',
    fontSize: '16px',
    lineHeight: 1
  };
  const bodyStyle = isOpen => ({
    display: 'grid',
    gridTemplateRows: isOpen ? '1fr' : '0fr',
    transition: 'grid-template-rows 700ms cubic-bezier(.22,1,.36,1)'
  });
  const innerStyle = isOpen => ({
    overflow: 'hidden',
    opacity: isOpen ? 1 : 0,
    transition: 'opacity 700ms cubic-bezier(.22,1,.36,1)'
  });
  const textStyle = {
    fontSize: '15px',
    lineHeight: 1.9,
    color: 'var(--color-text-secondary)',
    margin: 0,
    padding: '0 0 28px',
    maxWidth: '58ch'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: listStyle
  }, items.map((it, i) => {
    const isOpen = open === i;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: rowStyle
    }, /*#__PURE__*/React.createElement("button", {
      style: btnStyle,
      onClick: () => setOpen(isOpen ? -1 : i),
      "aria-expanded": isOpen
    }, /*#__PURE__*/React.createElement("span", null, it.question), /*#__PURE__*/React.createElement("span", {
      style: signStyle
    }, isOpen ? '–' : '+')), /*#__PURE__*/React.createElement("div", {
      style: bodyStyle(isOpen)
    }, /*#__PURE__*/React.createElement("div", {
      style: innerStyle(isOpen)
    }, /*#__PURE__*/React.createElement("p", {
      style: textStyle
    }, it.answer))));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/disclosure/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Badge({
  children,
  variant = 'outline',
  style,
  ...props
}) {
  const base = {
    display: 'inline-block',
    fontFamily: 'var(--font-sans-body)',
    fontWeight: 300,
    fontSize: '10px',
    letterSpacing: '0.24em',
    textTransform: 'uppercase',
    padding: '7px 16px',
    borderRadius: 'var(--radius-pill)',
    border: '1px solid transparent',
    lineHeight: 1.4
  };
  const variants = {
    outline: {
      color: 'var(--color-taupe-600)',
      borderColor: 'var(--color-sand-300)'
    },
    sand: {
      background: 'var(--color-sand-100)',
      color: 'var(--color-taupe-600)'
    },
    navy: {
      background: 'var(--color-navy)',
      color: 'var(--color-white)'
    },
    vinho: {
      background: 'var(--color-burgundy-mark)',
      color: 'var(--color-white)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      ...base,
      ...variants[variant],
      ...style
    }
  }, props), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Badge.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  placeholder,
  type = 'text',
  disabled = false,
  error = false,
  help,
  style,
  ...props
}) {
  const wrap = {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  };
  const labelStyle = {
    fontFamily: 'var(--font-sans-body)',
    fontSize: '11px',
    fontWeight: 400,
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    color: 'var(--color-taupe-500)'
  };
  const inputStyle = {
    fontFamily: 'var(--font-sans-body)',
    fontWeight: 300,
    fontSize: '16px',
    color: 'var(--color-text-primary)',
    padding: '10px 0',
    width: '100%',
    boxSizing: 'border-box',
    background: 'transparent',
    border: 'none',
    borderBottom: '1px solid ' + (error ? 'var(--color-burgundy-mark)' : 'var(--color-border-strong)'),
    borderRadius: 0,
    outline: 'none',
    transition: 'border-color 600ms cubic-bezier(.22,1,.36,1)',
    cursor: disabled ? 'not-allowed' : 'auto',
    opacity: disabled ? 0.4 : 1,
    ...style
  };
  const helpStyle = {
    fontFamily: 'var(--font-sans-body)',
    fontSize: '12px',
    lineHeight: 1.6,
    color: error ? 'var(--color-burgundy-mark)' : 'var(--color-text-secondary)'
  };
  return /*#__PURE__*/React.createElement("label", {
    style: wrap
  }, label && /*#__PURE__*/React.createElement("span", {
    style: labelStyle
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    placeholder: placeholder,
    disabled: disabled,
    style: inputStyle
  }, props)), help && /*#__PURE__*/React.createElement("span", {
    style: helpStyle
  }, help));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/layout/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  children,
  imageSrc,
  imageAlt = '',
  shape = 'arch',
  ratio = '3 / 4',
  title,
  eyebrow,
  subtitle,
  markSrc,
  style,
  ...props
}) {
  const shapes = {
    arch: 'var(--radius-arch)',
    'arch-soft': 'var(--radius-arch-soft)',
    petal: 'var(--radius-petal)',
    soft: 'var(--radius-soft)',
    square: '0'
  };
  const cardStyle = {
    background: 'transparent',
    border: 'none',
    ...style
  };
  const figureStyle = {
    margin: 0,
    aspectRatio: ratio,
    background: 'var(--color-sand-100)',
    overflow: 'hidden',
    borderRadius: shapes[shape] ?? shapes.arch
  };
  const imgStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block'
  };
  const contentStyle = {
    padding: '32px 8px 0'
  };
  const eyebrowStyle = {
    fontSize: '10px',
    letterSpacing: '0.26em',
    textTransform: 'uppercase',
    color: 'var(--color-taupe-500)',
    margin: '0 0 16px 0',
    fontWeight: 300
  };
  const markStyle = {
    height: '30px',
    width: 'auto',
    objectFit: 'contain',
    display: 'block',
    marginBottom: '18px'
  };
  const titleStyle = {
    fontFamily: 'var(--font-serif-display)',
    fontSize: '24px',
    fontWeight: 400,
    letterSpacing: '-0.005em',
    color: 'var(--color-text-primary)',
    margin: '0 0 14px 0'
  };
  const subtitleStyle = {
    fontSize: '14px',
    fontWeight: 300,
    color: 'var(--color-text-secondary)',
    lineHeight: 1.95,
    margin: 0,
    maxWidth: '32ch'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: cardStyle
  }, props), imageSrc && /*#__PURE__*/React.createElement("figure", {
    style: figureStyle
  }, /*#__PURE__*/React.createElement("img", {
    src: imageSrc,
    alt: imageAlt,
    style: imgStyle
  })), /*#__PURE__*/React.createElement("div", {
    style: contentStyle
  }, eyebrow && /*#__PURE__*/React.createElement("p", {
    style: eyebrowStyle
  }, eyebrow), markSrc && /*#__PURE__*/React.createElement("img", {
    src: markSrc,
    alt: "",
    style: markStyle
  }), title && /*#__PURE__*/React.createElement("h3", {
    style: titleStyle
  }, title), subtitle && /*#__PURE__*/React.createElement("p", {
    style: subtitleStyle
  }, subtitle), children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Card.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Card = __ds_scope.Card;

})();
