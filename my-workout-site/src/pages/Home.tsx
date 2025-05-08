// src/pages/Home.tsx
import React from "react";
import styles from "./Home.module.css";
import screenshot from "@/assets/graph-dark.png";
import screenshot2 from "@/assets/records-dark.png";
import screenshot3 from "@/assets/ongoing-dark.png";
import backgroundImage from "@/assets/benching-background.PNG";

const Home: React.FC = () => (
  <div className={styles.home}>
    <div
      className={styles.background}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    />
    <section className={styles.heroSection}>
      <div className={styles.content}>
        <h1>THE BEST WORKOUT APP OF 2025</h1>
        <p>
          Your ultimate fitness companion. Track workouts, monitor progress, and
          stay motivated with a wide range of programs, workouts, and exercises.
        </p>
        <div className={styles.imageContainer}>
          <div className={styles.stackContainer}>
            <img
              src={screenshot2}
              alt="App screenshot"
              className={styles.screenshotBack1}
            />
            <img
              src={screenshot3}
              alt="App screenshot"
              className={styles.screenshotBack2}
            />
            <img
              src={screenshot}
              alt="App screenshot"
              className={styles.screenshotFront}
            />
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Home;
