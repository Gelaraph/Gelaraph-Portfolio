import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineContacts,
} from 'react-icons/ai';
import { CgFileDocument } from 'react-icons/cg';
import { routes } from '../../../routes/BaseRoutes';
import { NavLink } from 'react-router-dom';
import './navLinks.css';

const NavLinks = () => {
  return (
    <ul className="navBar">
      <li>
        <NavLink to={routes.HOME} end>
          <AiOutlineHome />
          Home
        </NavLink>
      </li>

      <li>
        <NavLink to={routes.PROJECTS}>
          <AiOutlineFundProjectionScreen />
          Projects
        </NavLink>
      </li>
      <li>
        <NavLink to={routes.Contact}>
          <AiOutlineContacts />
          Contact
        </NavLink>
      </li>

      <li>
        <NavLink to={routes.RESUME}>
          <CgFileDocument />
          Resume
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
