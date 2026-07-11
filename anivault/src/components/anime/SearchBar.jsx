const SearchBar = ({ onSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const query = e.target.elements.query.value.trim();
    if (query) onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="query" type="text" placeholder="Buscar anime..." />
      <button type="submit">Buscar</button>
    </form>
  );
};

export default SearchBar;
