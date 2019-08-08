import React, { useContext } from "react";
import AppContext from "./AppContext";

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

const doSearch = (q, context) => {
  const { data, setResultList, setCurrentPage } = context;
  const results = filterData(q, data);
  setResultList(results);
  setCurrentPage(1);
};

function Search() {
  const context = useContext(AppContext);

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
      <br />
    </div>
  );
}

export default Search;
