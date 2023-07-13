import './techSkills.css';
import {
  DiJavascript1,
  DiReact,
  DiGit,
  DiSass,
} from 'react-icons/di';
import {
  SiRedux,
  SiTailwindcss,
  SiBootstrap,
  SiNextdotjs,
  SiStyledcomponents,
} from 'react-icons/si';

const TechSkills = () => {
  return (
    <ul className="teckskillsContainer">
      <li className="techIcon">
        <DiJavascript1 />
      </li>

      <li className="techIcon">
        <DiReact />
      </li>
      <li className="techIcon">
        <DiSass />
      </li>
      <li className="techIcon">
        <SiRedux />
      </li>

      <li className="techIcon">
        <SiNextdotjs />
      </li>

      <li className="techIcon">
        <DiGit />
      </li>

      <li className="techIcon">
        <SiStyledcomponents />
      </li>
      <li className="techIcon">
        <SiTailwindcss />
      </li>
      <li className="techIcon">
        <SiBootstrap />
      </li>
    </ul>
  );
};

export default TechSkills;
