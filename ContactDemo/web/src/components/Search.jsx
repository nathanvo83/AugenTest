import React, { useContext } from "react";
import AppContext from "./AppContext";

// if query string empty => return all data
// change to lower case and filter
const filterData = (q, data) => {
  if (q === "") {
    return data;
  }

  let s = q.toLowerCase();

  return data.filter(
    ({ firstName, lastName, email, phone1 }) =>
      firstName.toLowerCase().includes(s) ||
      lastName.toLowerCase().includes(s) ||
      email.toLowerCase().includes(s) ||
      phone1.toLowerCase().includes(s)
  );
};

// search from data => set resultList is search result
// init current page again
const doSearch = (q, context) => {
  const { data, setResultList, setCurrentPage } = context;
  const results = filterData(q, data);
  setResultList(results);
  setCurrentPage(1);
};

function Search() {
  const context = useContext(AppContext);

  // handler for textbox search
  const changeHandler = event => {
    const q = event.target.value;
    context.setQuery(q);
    doSearch(q, context);
  };

  return (
    <div className="search-textbox">
      <input
        type="text"
        value={context.query}
        onChange={changeHandler}
        placeholder="Search.."
      />
    </div>
  );
}

export default Search;
