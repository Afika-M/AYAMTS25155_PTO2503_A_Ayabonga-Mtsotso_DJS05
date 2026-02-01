import { useState, useContext } from "react";
import { formatDate } from "../../utils/formatDate";
import { PodcastContext } from "../../context/PodcastContext"; // import your context
import styles from "./PodcastDetails.module.css";

export default function PodcastDetails({ podcastId }) {
  const { podcasts } = useContext(PodcastContext); // get podcasts from context
  const podcast = podcasts.find((p) => p.id === podcastId);

  const [selectedSeasonIdx, setSelectedSeasonIdx] = useState(0);

  if (!podcast) {
    return <p className={styles.error}>Podcast not found.</p>;
  }

  const selectedSeason = podcast.seasons[selectedSeasonIdx];

  // Map genre IDs to titles
  const genreLabels = podcast.genres
    .map((id) => {
      const genre = podcasts.flatMap((p) => p.genres).find((g) => g.id === id);
      return genre?.title;
    })
    .filter(Boolean);

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

      <p className={styles.genres}>Genres: {genreLabels.join(", ")}</p>

      <p className={styles.updated}>
        Last updated: {formatDate(podcast.updated)}
      </p>

      <p className={styles.metaInfo}>
        Seasons: {podcast.seasons.length} • Episodes:{" "}
        {podcast.seasons.reduce(
          (total, season) => total + season.episodes.length,
          0,
        )}
      </p>

      {/* Season Selector */}
      <div className={styles.seasonHeader}>
        <h2>{selectedSeason.title}</h2>

        <select
          value={selectedSeasonIdx}
          onChange={(e) => setSelectedSeasonIdx(Number(e.target.value))}
        >
          {podcast.seasons.map((season, idx) => (
            <option key={season.id} value={idx}>
              {season.title} ({season.episodes.length} episodes)
            </option>
          ))}
        </select>
      </div>

      {/* Episodes */}
      <div className={styles.episodes}>
        {selectedSeason.episodes.map((ep) => (
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
                {ep.description.slice(0, 120)}…
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
