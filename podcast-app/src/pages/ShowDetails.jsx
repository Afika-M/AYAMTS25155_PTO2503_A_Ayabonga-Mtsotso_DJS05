import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchPodcastById } from "../api/fetchData";
import PodcastDetails from "../components/Podcasts/PodcastDetails";
import Loading from "../components/UI/Loading";
import Error from "../components/UI/Error";

export default function ShowDetails() {
  const { id } = useParams();
  const [podcast, setPodcast] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    fetchPodcastById(id, setPodcast, setError, setLoading);
  }, [id]);

  if (loading) return <Loading />;
  if (error) return <Error message="Error loading podcast" />;
  if (!podcast) return <Error message="Podcast not found" />;

  return <PodcastDetails podcast={podcast} />;
}
