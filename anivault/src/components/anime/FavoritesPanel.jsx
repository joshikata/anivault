const FavoritesPanel = ({ favorites, onRemove }) => {
  return (
    <div className="favorites-panel">
      <h2>Favoritos</h2>
      {favorites?.map((anime) => (
        <div key={anime.mal_id}>
          <span>{anime.title}</span>
          <button onClick={() => onRemove(anime.mal_id)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
};

export default FavoritesPanel;
