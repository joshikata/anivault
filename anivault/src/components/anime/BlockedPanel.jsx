const BlockedPanel = ({ blocked, onRemoveBlocked }) => {
  return (
    <aside className="blocked-panel">
      <div className="favorites-header">
        <h3>🚫 Bloqueados</h3>
        <span className="favorites-count">{blocked.length}</span>
      </div>

      <div className="favorites-list">
        {blocked && blocked.length > 0 ? (
          blocked.map((anime) => (
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
                onClick={() => onRemoveBlocked(anime)}
                title="Quitar de bloqueados"
              >
                ↺
              </button>
            </div>
          ))
        ) : (
          <p className="empty-favorites">No hay bloqueados aún</p>
        )}
      </div>
    </aside>
  );
};

export default BlockedPanel;
