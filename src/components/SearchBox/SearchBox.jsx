import css from "./SearchBox.module.css";

const SearchBox = (props) => {
  return (
      <div className={css.container}>
          <p className={css.text}>Find contacts by name</p>
          <input type="text" className={css.input}
            name="search"
            value={props.filter}
              onChange={(e) => props.onFilter(e.target.value)}
              placeholder="Search contacts..."
          />
    </div>
  )
}

export default SearchBox