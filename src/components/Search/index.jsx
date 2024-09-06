import styles from "./Search.module.css";
import { useContext } from "react";
import { SearchContext } from "../../App.jsx";

function Search() {
  const {searchValue, setSearchValue} = useContext(SearchContext);

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