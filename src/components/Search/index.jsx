import styles from "./Search.module.scss";
import { setSearchValue } from "../../redux/slices/filterSlice.js";
import { useRef, useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import debounce from "lodash.debounce";



function Search() {
  const dispatch = useDispatch();
  const [localSearchValue, setLocalSearchValue] = useState("");

  const inputRef = useRef(null);

  const onChangeClean = () => {
    dispatch(setSearchValue(""));
    setLocalSearchValue("")
    inputRef.current.focus();
  };

  const debouncedChangeInput = useCallback(debounce((str) => {
    dispatch(setSearchValue(str));
  }, 500), [])

  const handleChangeInput = (event) => {
    setLocalSearchValue(event.target.value);
    debouncedChangeInput(event.target.value);
  }


  return (
    <div className={styles.container}>
      <div className={styles.searchClean} onClick={onChangeClean}>X</div>
      <input
        ref={inputRef}
        className={styles.searchContainer}
        value={localSearchValue}
        onChange={handleChangeInput}
        type="text"
        placeholder="Поиск" />
    </div>
  );
}

export default Search;