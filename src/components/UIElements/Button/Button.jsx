/* eslint-disable react/prop-types */
import './button.css';

const Button = ({
  type = 'button',
  onClick,
  disabled,
  className,
  children,
  style,
  href,
  target,
}) => {
  if (href) {
    return (
      <a
        style={style}
        className={`${className} button`}
        href={href}
        target={target}>
        {children}
        <div className="button__horizontal"></div>
        <div className="button__vertical"></div>
      </a>
    );
  }
  return (
    <button
      style={style}
      className={`${className} button`}
      type={type}
      onClick={onClick}
      disabled={disabled}>
      {children}
      <div className="button__horizontal"></div>
      <div className="button__vertical"></div>
    </button>
  );
};

export default Button;
