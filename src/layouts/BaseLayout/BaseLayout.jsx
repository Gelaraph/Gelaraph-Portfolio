/* eslint-disable react/prop-types */
import './baseLayout.css';
import Header from '../../components/Header/Header';
// import Particles from '../../components/UIElements/Particles/Particles';
import Footer from '../../components/Footer/Footer';
import MainNavigation from '../../components/Navigation/MainNavigation/MainNavigation';

const BaseLayout = ({ children }) => {
  return (
    <div className="BaseLayout">
      {/* <Particles /> */}

      <Header>
        <MainNavigation />
      </Header>

      <div className="BaseContainer">{children}</div>

      <Footer />
    </div>
  );
};

export default BaseLayout;
