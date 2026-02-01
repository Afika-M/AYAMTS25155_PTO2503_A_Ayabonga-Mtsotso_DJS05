export default function PodcastDetails({ podcast }) {
  return (
    <div>
      <h1>{podcast.title}</h1>
      <img src={podcast.image} alt={podcast.title} />
      <p>{podcast.description}</p>
    </div>
  );
}
