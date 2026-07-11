function AnimeCard({ anime }) {
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
      </div>
    </article>
  );
}

export default AnimeCard;