import AnimeCard from "./AnimeCard";

function AnimeGrid({ animeList }) {
  return (
    <section className="anime-grid">
      {animeList.map((anime) => (
        <AnimeCard key={anime.mal_id} anime={anime} />
      ))}
    </section>
  );
}

export default AnimeGrid;