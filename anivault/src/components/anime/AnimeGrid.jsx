import AnimeCard from "./AnimeCard";

function AnimeGrid({ animeList, onToggleFavorite, isFavorite }) {
  return (
    <section className="anime-grid">
      {animeList.map((anime) => (
        <AnimeCard 
          key={anime.mal_id} 
          anime={anime}
          onToggleFavorite={onToggleFavorite}
          isFavorite={isFavorite(anime.mal_id)}
        />
      ))}
    </section>
  );
}

export default AnimeGrid;