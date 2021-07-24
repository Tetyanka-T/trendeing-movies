export default function SearchForm({ onSearch }) {
  const handleSearch = e => {
    e.preventDefault();
    onSearch(e.target.elements.searchImage.value);
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        name="searchImage"
        autoComplete="off"
        autoFocus
        placeholder="Search movie"
      />
      <button type="submit">Search</button>
    </form>
  );
}
