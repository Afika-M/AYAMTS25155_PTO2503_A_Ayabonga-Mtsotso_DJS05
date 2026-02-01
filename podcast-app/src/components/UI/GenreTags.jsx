import React from "react";
import { genres as genreMap } from "../../data";
import styles from "./GenreTags.module.css";

/**
 *  GenreTags Component
 * Renders a list of genre tags based on provided genre IDs.
 *  Each tag displays the genre title corresponding to its ID.
 * If a genre ID does not match any known genre, it displays "Unknown".
 *
 * * @param {Object} props
 * * @param {number[]} props.genres - Array of genre IDs as tags
 * * @returns {JSX.Element} - A styled list of genre tags
 *
 */

export default function GenreTags({ genres }) {
  const genreSpans = genres.map((id) => {
    const match = genreMap.find((genre) => genre.id === id);
    return (
      <span key={id} className={styles.Tag}>
        {match ? match.title : `${id}`}
      </span>
    );
  });

  return <div className={styles.tags}>{genreSpans}</div>;
}
