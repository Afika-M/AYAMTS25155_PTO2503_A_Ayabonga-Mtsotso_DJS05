// src/components/Podcasts/PodcastDetails.jsx
import { useState } from "react";
import { formatDate } from "../../utils/formatDate";
import GenreTags from "../UI/GenreTags";
import styles from "./PodcastDetails.module.css";

/**
 * PodcastDetails Component
 * Displays detailed information about a single podcast show,
 * including title, description, genres, seasons, and episodes.
 *
 * @param {Object} props
 * @param {Object} props.podcast - The podcast object fetched from the API
 * @returns {JSX.Element}
 */
export default function PodcastDetails({ podcast }) {
  const [selectedSeasonIdx, setSelectedSeasonIdx] = useState(0);

  if (!podcast) {
    return <p className={styles.error}>Podcast not found.</p>;
  }

  // If podcast has no seasons, create a placeholder
  const seasons =
    podcast.seasons && podcast.seasons.length
      ? podcast.seasons
      : [
          {
            id: 0,
            title: "Season 1",
            image: podcast.image,
            episodes: [],
          },
        ];

  const selectedSeason = seasons[selectedSeasonIdx];

  return (
    <div className={styles.container}>
      {/* Header */}
      <h1 className={styles.title}>{podcast.title}</h1>
      <img
        src={podcast.image}
        alt={podcast.title}
        className={styles.podcastImage}
      />

      {/* Description */}
      <p className={styles.description}>{podcast.description}</p>

      {/* Genres */}
      <div className={styles.genres}>
        <strong>Genres:</strong> <GenreTags genres={podcast.genres} />
      </div>

      {/* Last updated */}
      <p className={styles.updated}>
        Last updated: {formatDate(podcast.updated)}
      </p>

      {/* Meta info */}
      <p className={styles.metaInfo}>
        Seasons: {seasons.length} • Episodes:{" "}
        {seasons.reduce((total, season) => total + season.episodes.length, 0)}
      </p>

      {/* Season Selector */}
      <div className={styles.seasonHeader}>
        <h2>{selectedSeason.title}</h2>
        <select
          value={selectedSeasonIdx}
          onChange={(e) => setSelectedSeasonIdx(Number(e.target.value))}
          className={styles.seasonSelect}
        >
          {seasons.map((season, idx) => (
            <option key={season.id} value={idx}>
              {season.title} ({season.episodes.length} episodes)
            </option>
          ))}
        </select>
      </div>

      {/* Episodes */}
      <div className={styles.episodes}>
        {selectedSeason.episodes.length > 0 ? (
          selectedSeason.episodes.map((ep) => (
            <div key={ep.id} className={styles.episode}>
              <img
                src={selectedSeason.image}
                alt={ep.title}
                className={styles.episodeImage}
              />
              <div className={styles.episodeInfo}>
                <p className={styles.episodeTitle}>
                  {ep.episode}. {ep.title}
                </p>
                <p className={styles.episodeDesc}>
                  {ep.description
                    ? ep.description.slice(0, 120)
                    : "No description"}
                  …
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className={styles.noEpisodes}>No episodes available.</p>
        )}
      </div>
    </div>
  );
}
