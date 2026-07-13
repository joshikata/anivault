import AnimeCard from "./AnimeCard";

function AnimeGrid({ animeList, onToggleFavorite, onToggleBlocked, isFavorite, isBlocked }) {
  return (
    <section className="anime-grid">
      {animeList.map((anime) => (
        <AnimeCard 
          key={anime.mal_id} 
          anime={anime}
          onToggleFavorite={onToggleFavorite}
          onToggleBlocked={onToggleBlocked}
          isFavorite={isFavorite(anime.mal_id)}
          isBlocked={isBlocked(anime.mal_id)}
        />
      ))}
    </section>
  );
}

export default AnimeGrid;