import './mainSection.css';
import homeMainIcon from '../../../assets/home-main.svg';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Button from '../../../components/UIElements/Button/Button';

const MainSection = () => {
  return (
    <section className="content">
      <div className="hero-content">
        <div className="mainTitle-div">
          <h1 className="mainTitle">
            <strong className="mainName"> Angela Raphael</strong>
          </h1>

          <div style={{ marginTop: 50 }} className="intro">
            <p className="">Frontend Developer based in Nigeria.</p>
            <br />

            <p>
              Highly experienced in designing & developing fully
              responsive and scalable products with great user
              experience.
            </p>
            <div className="hero-button">
              <Button href="/contact">Contact</Button>
              <Button href="/resume">Portfolio</Button>
            </div>
          </div>
        </div>

        <div className="hero-img">
          <LazyLoadImage
            alt="home-img"
            effect="blur"
            src={homeMainIcon}
            wrapperClassName="homeMainIcon"
            width="100%"
            height="400"
          />
        </div>
      </div>
    </section>
  );
};

export default MainSection;
