const FavoritesPanel = ({ favorites, onRemoveFavorite }) => {
  return (
    <aside className="favorites-panel">
      <div className="favorites-header">
        <h3>❤️ Favoritos</h3>
        <span className="favorites-count">{favorites.length}</span>
      </div>
      
      <div className="favorites-list">
        {favorites && favorites.length > 0 ? (
          favorites.map((anime) => (
            <div key={anime.mal_id} className="favorite-item">
              <img 
                src={anime.images.jpg.image_url}
                alt={anime.title}
                className="favorite-img"
              />
              <div className="favorite-info">
                <h4>{anime.title}</h4>
                <p className="favorite-score">⭐ {anime.score}</p>
              </div>
              <button 
                className="remove-btn"
                onClick={() => onRemoveFavorite(anime)}
                title="Quitar de favoritos"
              >
                ✕
              </button>
            </div>
          ))
        ) : (
          <p className="empty-favorites">No hay favoritos aún</p>
        )}
      </div>
    </aside>
  );
};

export default FavoritesPanel;
