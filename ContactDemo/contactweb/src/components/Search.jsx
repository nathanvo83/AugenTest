import React, { useContext } from "react";
import AppContext from "./AppContext";

// const LIMIT = 100;
// && count++ < LIMIT

const filterData = (q, data) => {
  if (q === "") {
    // return data.slice(0, LIMIT);
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
  const { data, setResultList } = context;
  const results = filterData(q, data);
  setResultList(results);
};

function Search() {
  const context = useContext(AppContext);

  const changeHandler = event => {
    const q = event.target.value;
    context.setQuery(q);
    doSearch(q, context);
  };

  return (
    <div>
      Search
      <input type="text" value={context.query} onChange={changeHandler} />
    </div>
  );

  // <div>Search = {context.query}</div>;
}

export default Search;
