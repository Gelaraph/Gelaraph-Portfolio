import './footer.css';
import { AiFillGithub } from 'react-icons/ai';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer">
      <div className="FooterContainer">
        <div className="copyright">
          <h1>Angela Raphael ©2023</h1>
        </div>

        <div className="body">
          <ul className="socialIcons">
            <li>
              <a
                href="https://github.com/gelaraph"
                target="_blank"
                rel="noreferrer"
                aria-label="github"
              >
                <AiFillGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/Gelaraph"
                target="_blank"
                rel="noreferrer"
                aria-label="facebook"
              >
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/gelaraph"
                target="_blank"
                rel="noreferrer"
                aria-label="twitter"
              >
                <FaTwitter />
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/angelaraph"
                target="_blank"
                rel="noreferrer"
                aria-label="linkedin"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
