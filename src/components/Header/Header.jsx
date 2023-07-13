/* eslint-disable react/prop-types */
import cx from 'classnames';
import './header.css';
import { useEffect, useState } from 'react';

const Header = ({ children }) => {
  const [headerHighlight, setHeaderHighlight] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      setHeaderHighlight(window.scrollY >= 20);
    };

    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);

  return (
    <div
      className={cx('header', {
        ['highlighted']: headerHighlight,
      })}
    >
      <div className="container">{children}</div>
    </div>
  );
};

export default Header;
