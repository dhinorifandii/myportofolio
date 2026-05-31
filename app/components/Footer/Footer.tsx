import React from 'react';
import { FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.glowingBorder}></div>
      <div className={styles.footerContent}>
        <div className={styles.branding}>
          <p>DhinoCode</p>
        </div>
        <div className={styles.socials}>
          <a href="https://github.com/dhinorifandii" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/dhino_rifandii?igsh=bzZjazFicDF5NXJr&utm_source=qr" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://wa.me/6285227149177" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </a>
        </div>
        <div className={styles.copyright}>
          <p>© 2026 Dhino Rifandi — Build with passion, designed with elegance.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
