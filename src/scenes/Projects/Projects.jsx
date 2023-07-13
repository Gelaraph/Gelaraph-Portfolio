import './projects.css';
import projects from '../../data/projects';
import BaseLayout from '../../layouts/BaseLayout/BaseLayout';
import ProjectCard from './ProjectCard/ProjectCard';

const Projects = () => {
  return (
    <BaseLayout>
      <div className="project-content">
        <h1 className="project-title">
          My Recent <strong className="orange">Works</strong>
        </h1>
        <p className="subtitle">
          Here are a few projects I&apos;ve worked on recently.
        </p>

        <ul className="projects">
          {projects.map((props, id) => (
            <ProjectCard key={id} {...props} />
          ))}
        </ul>
      </div>
    </BaseLayout>
  );
};

export default Projects;
