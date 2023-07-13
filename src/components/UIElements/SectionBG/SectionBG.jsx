/* eslint-disable react/prop-types */
import './sectionBG.css';

const SectionBG = ({ children }) => {
  return (
    <div className="sectionBG">
      <div className="pattern">{children}</div>
    </div>
  );
};

export default SectionBG;
