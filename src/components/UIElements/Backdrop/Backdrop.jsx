/* eslint-disable react/prop-types */
import './backdrop.css';

const Backdrop = ({ onClick }) => {
  return <div className="backdrop" onClick={onClick} />;
};

export default Backdrop;
