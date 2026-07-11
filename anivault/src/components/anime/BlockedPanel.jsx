const BlockedPanel = ({ blocked, onRemove }) => {
  return (
    <div className="blocked-panel">
      <h2>Bloqueados</h2>
      {blocked?.map((anime) => (
        <div key={anime.mal_id}>
          <span>{anime.title}</span>
          <button onClick={() => onRemove(anime.mal_id)}>Desbloquear</button>
        </div>
      ))}
    </div>
  );
};

export default BlockedPanel;
