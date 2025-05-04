import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.css";

export const Header: React.FC = () => {
  // theme state and persistence
  const [theme, setTheme] = useState<"light" | "dark">(
    () =>
      (localStorage.getItem("theme") as "light" | "dark") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light")
  );
  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const [show, setShow] = useState(true);
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setShow(currentY < lastY || currentY < 50);
      setLastY(currentY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastY]);

  return (
    <header
      className={`${styles.header} ${show ? styles.visible : styles.hidden}`}
    >
      <div className={styles.logo}>
        <Link to="/">MyWorkout</Link>
      </div>
      <div className={styles.navContainer}>
        <nav>
          <NavLink to="/about">About us</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/app">App</NavLink>
          <NavLink to="/contact">Contact us</NavLink>
        </nav>
        <label className={styles.switch}>
          <input
            type="checkbox"
            checked={theme === "dark"}
            onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
          />
          <span className={styles.slider} />
        </label>
      </div>
    </header>
  );
};
