// src/components/Podcasts/PodcastDetails.jsx
import { useState } from "react";
import { formatDate } from "../../utils/formatDate";
import styles from "./PodcastDetails.module.css";

/**
 * Component to display full details for a single podcast show
 *
 * @param {Object} props
 * @param {Object} props.podcast - Podcast object fetched from API
 * @returns {JSX.Element}
 */
export default function PodcastDetails({ podcast }) {
  const [selectedSeasonIdx, setSelectedSeasonIdx] = useState(0);

  // --- Local genre mapping for human-readable labels ---
  const genreMap = {
    1: "Personal Growth",
    2: "Investigative Journalism",
    3: "History",
    4: "Comedy",
    5: "Entertainment",
    6: "Business",
    7: "Fiction",
    8: "News",
    9: "Kids and Family",
  };

  if (!podcast) {
    return <p className={styles.error}>Podcast not found.</p>;
  }

  const genreLabels =
    podcast.genres?.map((id) => genreMap[id] || `${id}`) || [];

  // Safely get seasons (some shows might not have any)
  const seasons = podcast.seasons || [];
  const selectedSeason = seasons[selectedSeasonIdx] || null;

  return (
    <div className={styles.container}>
      {/* Podcast Header */}
      <h1 className={styles.title}>{podcast.title}</h1>

      <img
        src={podcast.image}
        alt={podcast.title}
        className={styles.podcastImage}
      />

      <p className={styles.description}>{podcast.description}</p>

      <p className={styles.genres}>
        Genres: {genreLabels.length > 0 ? genreLabels.join(", ") : "Unknown"}
      </p>

      <p className={styles.updated}>
        Last updated: {podcast.updated ? formatDate(podcast.updated) : "N/A"}
      </p>

      {/* Season Selector */}
      <div className={styles.seasonSelector}>
        <h2>Seasons</h2>
        {seasons.length > 0 ? (
          <select
            value={selectedSeasonIdx}
            onChange={(e) => setSelectedSeasonIdx(Number(e.target.value))}
          >
            {seasons.map((season, idx) => (
              <option key={season.id || idx} value={idx}>
                {season.title || `Season ${idx + 1}`} (
                {season.episodes?.length || 0} episodes)
              </option>
            ))}
          </select>
        ) : (
          <p>No seasons available.</p>
        )}
      </div>

      {/* Episodes */}
      <div className={styles.episodes}>
        {selectedSeason && selectedSeason.episodes?.length > 0 ? (
          selectedSeason.episodes.map((ep, idx) => (
            <div key={ep.id || idx} className={styles.episode}>
              <img
                src={selectedSeason.image || podcast.image}
                alt={ep.title}
                className={styles.episodeImage}
              />

              <div className={styles.episodeInfo}>
                <p className={styles.episodeTitle}>
                  {ep.episode || idx + 1}. {ep.title || "Untitled Episode"}
                </p>
                <p className={styles.episodeDesc}>
                  {ep.description
                    ? ep.description.slice(0, 120) + "…"
                    : "No description available."}
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
