const Stats = ({ total = 0, favorites = 0, blocked = 0 }) => {
  return (
    <div className="stats-grid" aria-label="Estadísticas generales">
      <article className="stats-card">
        <span className="stats-card__label">Totales</span>
        <strong className="stats-card__value">{total}</strong>
      </article>
      <article className="stats-card">
        <span className="stats-card__label">Favoritos</span>
        <strong className="stats-card__value">{favorites}</strong>
      </article>
      <article className="stats-card">
        <span className="stats-card__label">Bloqueados</span>
        <strong className="stats-card__value">{blocked}</strong>
      </article>
    </div>
  );
};

export default Stats;
