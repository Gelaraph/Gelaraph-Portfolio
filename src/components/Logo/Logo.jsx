/* eslint-disable react/prop-types */
import './logo.css';
import { routes } from '../../routes/BaseRoutes';
import { Link } from 'react-router-dom';

const Logo = ({ className }) => {
  return (
    <div className={className}>
      <Link to={routes.HOME} aria-label="site logo">
        <h4 className="logoName logoPrimary">Gelaraph</h4>
      </Link>
    </div>
  );
};

export default Logo;
