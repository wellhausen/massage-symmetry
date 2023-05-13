import { useState } from 'react';
import Link from 'next/link';
import styles from './layout.module.css';
import '../../styles/global.css';

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  console.log("isMenuOpen: ", isMenuOpen);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log("isMenuOpen: ", isMenuOpen);
  };

  return (
    <div>
      <nav className={`${styles.menu} ${isMenuOpen ? styles.open : ''}`}>
        <div className={styles.hamburger} onClick={toggleMenu}>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>
        <ul>
          <li>
            <Link href="/booking" onClick={toggleMenu}>
              Booking
            </Link>
          </li>
          <li>
            <Link href="/pricing" onClick={toggleMenu}>
              Pricing
            </Link>
          </li>
          <li>
            <Link href="/techniques" onClick={toggleMenu}>
              Techniques
            </Link>
          </li>
          <li>
            <Link href="/about" onClick={toggleMenu}>
              About
            </Link>
          </li>
          <li>
            <Link href="/testimonials" onClick={toggleMenu}>
              Testimonials
            </Link>
          </li>
        </ul>
      </nav>
      {children}
    </div>
  );
};

export default Layout;
