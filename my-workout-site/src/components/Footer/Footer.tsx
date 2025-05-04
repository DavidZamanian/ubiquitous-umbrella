import React from "react";
import styles from "./Footer.module.css";

const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <div>
      <a href="/privacy">Privacy Policy</a> | <a href="/terms">Terms of Use</a>
    </div>
    <div>
      <a href="mailto:info@example.com">info@example.com</a>
    </div>
  </footer>
);

export default Footer;
