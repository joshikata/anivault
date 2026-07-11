const AnimeCard = ({ anime }) => {
  return (
    <div className="anime-card">
      <p>{anime?.title}</p>
    </div>
  );
};

export default AnimeCard;
