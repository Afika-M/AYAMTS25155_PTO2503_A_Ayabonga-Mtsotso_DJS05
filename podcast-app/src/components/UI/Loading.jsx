import React from "react";
import styles from "./Loading.module.css";

/**
 * Loading Component
 * Renders a loading spinner to indicate that content is being loaded.
 *
 * @param {Object} props
 * @param {string} props.message - Optional loading message
 * @returns {JSX.Element}
 */
export default function Loading({ message }) {
  return (
    <div className={styles.messageContainer}>
      <div className={styles.spinner}></div>
      {message && <p className={styles.message}>{message}</p>}
    </div>
  );
}
