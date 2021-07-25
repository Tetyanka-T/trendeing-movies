import s from './SearchForm.module.css';

export default function SearchForm({ onSearch }) {
  const handleSearch = e => {
    e.preventDefault();
    onSearch(e.target.elements.searchImage.value);
  };

  return (
    <form onSubmit={handleSearch} className={s.SearchForm}>
      <button type="submit" className={s.button}>
        Search
      </button>
      <input
        className={s.SearchForm_input}
        type="text"
        name="searchImage"
        autoComplete="off"
        autoFocus
        placeholder="Search movie"
      />
    </form>
  );
}
