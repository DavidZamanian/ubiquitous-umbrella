import React from "react";
import styles from "./Contact.module.css";

const Contact: React.FC = () => (
  <main className={styles.contact}>
    <h1>Contact Us</h1>
    <p>
      Have questions, feature requests, issues, or feedback? Reach out to us at{" "}
      <a href="mailto:contact@example.com">contact@example.com</a>.
    </p>
    <p>
      We're here to help and would love to hear from you about how we can
      improve your workout experience.
    </p>
  </main>
);

export default Contact;
