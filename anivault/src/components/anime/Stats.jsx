const Stats = ({ favorites = [], blocked = [] }) => {
  return (
    <div className="stats">
      <p>Favoritos: {favorites.length}</p>
      <p>Bloqueados: {blocked.length}</p>
    </div>
  );
};

export default Stats;
