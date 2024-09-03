import styles from "./Search.module.css";

function Search({ searchValue, setSearchValue }) {

  return (
    <div>
      <input
        className={styles.searchContainer}
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
        type="text"
        placeholder="Поиск" />
    </div>
  );
}

export default Search;