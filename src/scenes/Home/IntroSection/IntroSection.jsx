import GithubActivity from '../../About/GithubActivity/GithubActivity';
import TechSkills from '../../About/TechSkills/TechSkills';
import './introSection.css';

const IntroSection = () => {
  return (
    <section className="content">
      <div className="introduction">
        <div className="introductionText">
          <h1 className="title">About</h1>

          <div className="description">
            <p>
              Are you in search of a skilled and creative Front-End
              Developer? Look no further! With my expertise, I craft
              captivating and dynamic web applications that deliver
              the ultimate user experience tailored to their specific
              device and browser.
            </p>
            <p>
              My code is not only standards-based but also semantic,
              accessible, and search-engine friendly. It&apos;s
              designed to be easily maintainable, compatible across
              various browsers, and highly performant.
            </p>
            <p>
              What sets me apart is my unwavering commitment to
              excellence. I not only meet your expectations but go the
              extra mile to surpass them. I&apos;m proficient in
              utilizing cutting-edge tools like
              <i>
                <b className="purple"> React, Redux, and Jest </b>
              </i>
              to ensure top-notch code quality.
            </p>
            <p>
              In addition, I have a solid background in building
              robust systems that seamlessly integrate business logic
              and interact with server-side technologies through
              powerful APIs.
            </p>
            <p>
              But that&apos;s not all! I am driven by a passion for
              exploring new technologies and creating innovative
              products that transform the digital landscape.
            </p>
            <p>
              If you&apos;re ready to elevate your web development
              projects to new heights, let&apos;s connect and bring
              your visions to life!
            </p>
          </div>
        </div>
      </div>
      <div>
        <TechSkills />
        <GithubActivity />
      </div>
    </section>
  );
};

export default IntroSection;
