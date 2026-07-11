function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="search-bar">
      <label htmlFor="anime-search" className="search-bar__label">
        Buscar anime
      </label>

      <input
        id="anime-search"
        className="search-bar__input"
        type="search"
        placeholder="Escribe un título..."
        value={searchTerm}
        onChange={(event) => onSearchChange(event.target.value)}
      />
    </div>
  );
}

export default SearchBar;