function AnimeCard({ anime, onToggleFavorite, isFavorite }) {
  return (
    <article className="anime-card">
      <img
        src={anime.images.jpg.large_image_url}
        alt={`Portada de ${anime.title}`}
      />

      <div>
        <h2>{anime.title}</h2>
        <p>⭐ {anime.score ?? "Sin puntuación"}</p>
        <p>{anime.type ?? "Tipo desconocido"}</p>
        <button 
          className={`favorite-btn ${isFavorite ? 'active' : ''}`}
          onClick={() => onToggleFavorite(anime)}
          title={isFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}
        >
          {isFavorite ? '❤️ Favorito' : '🤍 Favorito'}
        </button>
      </div>
    </article>
  );
}

export default AnimeCard;