import { lazy } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
const Home = lazy(() => import('../scenes/Home/Home'));
const Projects = lazy(() => import('../scenes/Projects/Projects'));
const Resume = lazy(() => import('../scenes/Resume/Resume'));
const Contact = lazy(() => import('../scenes/Contact/Contact'));
import ModalProjectCard from '../scenes/Projects/ModalProjectCard/ModalProjectCard';

export const routes = {
  HOME: '/',
  PROJECTS: '/projects',
  PROJECT: '/project/:id',
  Contact: '/contact',
  RESUME: '/resume',
};

const BaseRoutes = () => {
  const location = useLocation();
  const background = location.state?.background;

  return (
    <>
      <Routes location={background || location}>
        <Route path={routes.HOME} element={<Home />} />
        <Route path={routes.RESUME} element={<Resume />} />
        <Route path={routes.PROJECTS} element={<Projects />} />
        <Route path={routes.Contact} element={<Contact />} />
      </Routes>

      {background && (
        <Routes>
          <Route
            path={routes.PROJECT}
            element={<ModalProjectCard />}
          />
        </Routes>
      )}
    </>
  );
};

export default BaseRoutes;
