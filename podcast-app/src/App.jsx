import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { PodcastProvider } from "./context/PodcastContext";
import { fetchPodcasts } from "./api/fetchPodcasts";
import Header from "./components/UI/Header";
import Home from "./components/Pages/Home";
import PodcastDetail from "./components/Podcasts/PodcastDetails";

/**
 * Root component of the Podcast app.
 * Handles data fetching and layout composition.
 */
export default function App() {
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPodcasts(setPodcasts, setError, setLoading);
  }, []);

  return (
    <>
      <Header />
      <PodcastProvider initialPodcasts={podcasts}>
        <Routes>
          <Route path="/" element={<Home loading={loading} error={error} />} />
          <Route path="/podcast/:id" element={<PodcastDetail />} />
        </Routes>
      </PodcastProvider>
    </>
  );
}
