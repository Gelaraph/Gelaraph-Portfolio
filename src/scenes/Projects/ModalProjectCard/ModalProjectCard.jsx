import './modalProjectCard.css';
import projects from '../../../data/projects';
import { BiLinkExternal } from 'react-icons/bi';
import Modal from '../../../components/Modal/Modal';
import Button from '../../../components/UIElements/Button/Button';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useModal } from '../../../hooks/modalHook';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ModalProjectCard = () => {
  const { id } = useParams();
  const { image, title, links, technologies } = projects.find(
    (p) => id === p.id,
  );
  const { isVisible, toggleModal } = useModal();

  useEffect(() => {
    toggleModal();
  }, []);

  return (
    <Modal show={isVisible} onClose={toggleModal}>
      <div className="cardWrapper">
        <LazyLoadImage
          alt="project-img"
          src={image.src}
          effect="blur"
          width="100%"
          height="270px"
          wrapperClassName="image"
          placeholderSrc={image.placeholderSrc}
        />

        <div className="cardBody">
          <h3 className="title">{title}</h3>

          <div className="technologies">
            {technologies.map((tech, index) => (
              <span key={index}>{tech}</span>
            ))}
          </div>
        </div>

        <div className="cardFooter">
          <a
            style={{ width: '12rem' }}
            className="primary"
            href={links.site}
            target="_blank"
            rel="noreferrer">
            <BiLinkExternal /> &nbsp; View project
          </a>

          {!!links.repo && (
            <a
              style={{ width: '12rem' }}
              className="primary"
              href={links.repo}
              target="_blank"
              rel="noreferrer">
              <BiLinkExternal /> &nbsp; Know more
            </a>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default ModalProjectCard;
