// src/components/Hero/Hero.tsx
import React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import styles from "./Hero.module.css";
import appStoreBadge from "@/assets/appstore-badge.svg"; // add badge SVG here

const Hero: React.FC = () => {
  const { scrollY } = useViewportScroll();
  // rotate from 0° to 15° over the first 300px of scroll
  const rotate = useTransform(scrollY, [0, 300], [0, 15]);

  return (
    <section className={styles.hero}>
      <video className={styles.bgVideo} autoPlay muted loop>
        <source src="/video-placeholder.mp4" type="video/mp4" />
        {/* Place your iPhone demo loop here */}
      </video>
      <motion.div className={styles.phoneContainer} style={{ rotate }}>
        <img
          src="/phone-placeholder.png"
          alt="App on iPhone"
          className={styles.phone}
        />
      </motion.div>
      <div className={styles.content}>
        <h1 className={styles.title}>Get Fit. Stay Strong.</h1>
        <p className={styles.subtitle}>Your ultimate workout companion.</p>
        <a
          href="https://apps.apple.com/app/idYOUR_APP_ID"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={appStoreBadge}
            alt="Download on the App Store"
            className={styles.appStoreBadge}
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;
