/* eslint-disable react/prop-types */
import './homeLayout.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import MainNavigation from '../../components/Navigation/MainNavigation/MainNavigation';

const HomeLayout = ({ children }) => {
  return (
    <div className="layout">
      <Header>
        <MainNavigation />
      </Header>

      {children}

      <Footer />
    </div>
  );
};

export default HomeLayout;
