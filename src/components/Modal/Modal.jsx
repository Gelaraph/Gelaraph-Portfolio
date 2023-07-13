/* eslint-disable react/prop-types */
import './modal.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import Backdrop from '../UIElements/Backdrop/Backdrop';
import { AiOutlineClose } from 'react-icons/ai';

const Modal = ({ children, show, onClose }) => {
  const navigate = useNavigate();

  const closeModal = (e) => {
    e.stopPropagation();

    onClose();
    navigate(-1);
  };

  useEffect(() => {
    document.body.classList.add('overflow-hidden');

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  return (
    <div className="modal-container">
      {show && <Backdrop onClick={closeModal} />}
      <CSSTransition
        in={show}
        timeout={300}
        classNames="modal"
        mountOnEnter
        unmountOnExit
      >
        <div className="modal">
          <div className="closeWrapper" onClick={closeModal}>
            <button className="closeButton">
              <AiOutlineClose className="closeIcon" />
            </button>
          </div>
          {children}
        </div>
      </CSSTransition>
    </div>
  );
};

export default Modal;
