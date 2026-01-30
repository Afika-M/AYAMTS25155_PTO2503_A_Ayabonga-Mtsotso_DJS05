import SearchBar from "../components/Filters/SearchBar";
import SortSelect from "../components/Filters/SortSelect";
import GenreFilter from "../components/Filters/GenreFilter";
import PodcastGrid from "../components/Podcasts/PodcastGrid";
import Pagination from "../components/UI/Pagination";
import styles from "../App.module.css";
import { genres } from "../data";

/**
 * Homepage showing podcast list, filters, and pagination
 */
export default function Home({ loading, error }) {
  return (
    <main className={styles.main}>
      <section className={styles.controls}>
        <SearchBar />
        <GenreFilter genres={genres} />
        <SortSelect />
      </section>

      {loading && (
        <div className={styles.messageContainer}>
          <div className={styles.spinner}></div>
          <p>Loading podcasts...</p>
        </div>
      )}

      {error && (
        <div className={styles.message}>
          <div className={styles.error}>
            Error occurred while fetching podcasts: {error}
          </div>
        </div>
      )}

      {!loading && !error && (
        <>
          <PodcastGrid genres={genres} />
          <Pagination />
        </>
      )}
    </main>
  );
}
