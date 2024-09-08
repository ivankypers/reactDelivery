import styles from "./Search.module.css";
import {setSearchValue} from '../../redux/slices/filterSlice.js'
import { useDispatch, useSelector } from "react-redux";

function Search() {
  const dispatch = useDispatch();
  const searchValue = useSelector((state) => state.filter.searchValue);

  return (
    <div>
      <input
        className={styles.searchContainer}
        value={searchValue}
        onChange={(event) => {

          dispatch(setSearchValue(event.target.value));
        }}
        type="text"
        placeholder="Поиск" />
    </div>
  );
}

export default Search;