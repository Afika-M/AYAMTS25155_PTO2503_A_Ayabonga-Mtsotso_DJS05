import React from "react";
import styles from "./Error.module.css";

/**
 * Error component
 * 
 * Renders an error message with a styled container.
 * Used to display error notifications in the application.
 * 
 * 
 * * @param {Object} props
 * * @param {string} props.message - The error message to display
 * * @returns {JSX.Element} - The styled error component

 */
export default function Error({ message }) {
  return (
    <div className={styles.messageContainer}>
      <p className={styles.error}>{message}</p>
    </div>
  );
}
