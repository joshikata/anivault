function AnimeCard({ anime, onToggleFavorite, onToggleBlocked, isFavorite, isBlocked }) {
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
        <div className="anime-card-actions">
          <button 
            className={`favorite-btn ${isFavorite ? 'active' : ''}`}
            onClick={() => onToggleFavorite(anime)}
            title={isFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}
          >
            {isFavorite ? '❤️ Favorito' : '🤍 Favorito'}
          </button>
          <button 
            className={`blocked-btn ${isBlocked ? 'active' : ''}`}
            onClick={() => onToggleBlocked(anime)}
            title={isBlocked ? 'Quitar de bloqueados' : 'Bloquear elemento'}
          >
            {isBlocked ? '🚫 Bloqueado' : '🚫 Bloquear'}
          </button>
        </div>
      </div>
    </article>
  );
}

export default AnimeCard;