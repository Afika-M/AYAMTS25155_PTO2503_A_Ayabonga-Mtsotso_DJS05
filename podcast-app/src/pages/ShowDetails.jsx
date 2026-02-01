import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchPodcastById } from "../api/fetchData";
import PodcastDetails from "../components/Podcasts/PodcastDetails";

export default function ShowDetails() {
  const { id } = useParams();
  const [podcast, setPodcast] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    fetchPodcastById(id, setPodcast, setError, setLoading);
  }, [id]);

  if (loading) return <p>Loading podcast...</p>;
  if (error) return <p>Error loading podcast</p>;
  if (!podcast) return <p>Podcast not found</p>;

  return <PodcastDetails podcast={podcast} />;
}
