/* eslint-disable react/prop-types */
import './burger.css';

const Burger = ({ onClick }) => {
  return (
    <button onClick={onClick} className="burger">
      <span />
      <span />
      <span />
    </button>
  );
};

export default Burger;
