/**
 * @function fetchPodcasts
 * Asynchronously fetches podcast data from the remote API and updates state accordingly.
 * Handles loading, error, and successful data response via provided state setters.
 *
 * @param {Function} setPodcasts - State setter function to update the podcasts array.
 * @param {Function} setError - State setter function to update the error message (string).
 * @param {Function} setLoading - State setter function to toggle the loading state (boolean).
 *
 * @returns {Promise<void>} A promise that resolves when the fetch process completes.
 *
 **/
export async function fetchPodcasts(setPodcasts, setError, setLoading) {
  try {
    const res = await fetch("https://podcast-api.netlify.app/shows");
    if (!res.ok) throw new Error(`${res.status}`);
    const data = await res.json();
    setPodcasts(data);
  } catch (err) {
    console.error("Failed to fetch podcasts:", err);
    setError(err.message);
  } finally {
    setLoading(false);
  }
}

// add single podcast fetch function
/**
 * @function fetchPodcastById
 * Asynchronously fetches a single podcast's data from the remote API by its ID.
 * Handles loading, error, and successful data response via provided state setters.
 *
 * @param {string} id - The unique identifier of the podcast to fetch.
 * @param {Function} setPodcast - State setter function to update the podcast object.
 * @param {Function} setError - State setter function to update the error message (string).
 * @param {Function} setLoading - State setter function to toggle the loading state (boolean).
 *
 * @returns {Promise<void>} A promise that resolves when the fetch process completes.
 *
 **/
export async function fetchPodcastById(id, setPodcast, setError, setLoading) {
  try {
    const res = await fetch(`https://podcast-api.netlify.app/shows/${id}`);
    if (!res.ok) throw new Error(`${res.status}`);
    const data = await res.json();
    setPodcast(data);
  } catch (err) {
    console.error(`Failed to fetch podcast with id ${id}:`, err);
    setError(err.message);
  } finally {
    setLoading(false);
  }
}
