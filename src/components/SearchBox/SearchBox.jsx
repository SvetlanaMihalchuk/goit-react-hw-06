import { useDispatch } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  return (
    <div className={css.container}>
      <p className={css.text}>Find contacts by name</p>
      <input
        type="text"
        className={css.input}
        name="search"
        placeholder="Search contacts..."
        onChange={(e) => {
          dispatch(changeFilter(e.target.value));
        }}
      />
    </div>
  );
};

export default SearchBox;
