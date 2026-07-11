const AnimeGrid = ({ animes }) => {
  return (
    <div className="anime-grid">
      {animes?.map((anime) => (
        <div key={anime.mal_id}>{anime.title}</div>
      ))}
    </div>
  );
};

export default AnimeGrid;
