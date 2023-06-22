import React, { useState } from 'react';
import Link from 'next/link';
import styles from './menu.module.css';
import Image from 'next/image';


const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div
        className={`${styles.hamburger} ${isMenuOpen ? styles.menuOpen : ''}`}
        onClick={toggleMenu}
      >
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {isMenuOpen && (
        <div>
          <div className={`${styles.overlay} ${styles.menuOverlay}`} onClick={toggleMenu}></div>
          <div className={`${styles.menu} ${isMenuOpen ? styles.menuOpen : ''}`}>
            <div className={styles.closeButton} onClick={toggleMenu}>
              X
            </div>
            <ul className={`${styles.menuItems}`}>
              <li className={styles.mainMenuLink}>
                <Link href="/" onClick={toggleMenu} className={styles.menuLink}>
                  <Image src="/images/logo-no-name.svg" alt="Roman" width={200} height={200} className={styles.image} />
                </Link>
              </li>
              <li className={styles.mainMenuLink}>
                <Link href="/booking" onClick={toggleMenu} className={styles.menuLink}>
                  Booking
                </Link>
              </li>
              <li className={styles.mainMenuLink}>
                <Link href="/pricing" onClick={toggleMenu} className={styles.menuLink}>
                  Pricing
                </Link>
              </li>
              <li className={styles.mainMenuLink}>
                <Link href="/techniques" onClick={toggleMenu} className={styles.menuLink}>
                  Techniques
                </Link>
              </li>
              <li className={styles.mainMenuLink}>
                <Link href="/about" onClick={toggleMenu} className={styles.menuLink}>
                  About
                </Link>
              </li>
              <li className={styles.mainMenuLink}>
                <Link href="/testimonials" onClick={toggleMenu} className={styles.menuLink}>
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Menu;
