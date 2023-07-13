/* eslint-disable react/prop-types */
import './projectCard.css';
import { Link, useLocation } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ProjectCard = ({ id, image, title, description }) => {
  const location = useLocation();

  return (
    <li className="card">
      <div className="cardWrapper">
        <Link to={`/project/${id}`} state={{ background: location }}>
          <LazyLoadImage
            alt="card-img"
            effect="blur"
            src={image.src}
            width="100%"
            style={{ minHeight: '10rem' }}
            placeholderSrc={image.placeholderSrc}
          />
        </Link>

        <div className="cardBody">
          <h3 className="title">{title}</h3>
          <p className="description">{description}</p>
        </div>
      </div>
    </li>
  );
};

export default ProjectCard;
