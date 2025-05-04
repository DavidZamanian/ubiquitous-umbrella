// src/pages/Home.tsx
import React from "react";
import styles from "./Home.module.css";
import screenshot from "@/assets/IMG_2160.PNG";
import appStoreButton from "@/assets/apple-app-store-button.PNG";

const Home: React.FC = () => (
  <div className={styles.home}>
    <section className={styles.heroSection}>
      <div className={styles.content}>
        <h1>The best workout app of 2025</h1>
        <p>
          Your ultimate fitness companion. Track workouts, monitor progress, and
          stay motivated with a wide range of programs, workouts, and exercises.
        </p>
        <a
          href="https://apps.apple.com/app/idYOUR_APP_ID"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={appStoreButton}
            alt="Download on the App Store"
            className={styles.appStoreButton}
          />
        </a>
      </div>
      <div className={styles.imageContainer}>
        <img
          src={screenshot}
          alt="App screenshot"
          className={styles.screenshot}
        />
      </div>
    </section>
  </div>
);

export default Home;
