import React, { useContext } from "react";
import AppContext from "./AppContext";

function Results() {
  const context = useContext(AppContext);
  const { pageSize, currentPage, resultList } = context;

  const display = resultList.slice(
    pageSize * (currentPage - 1),
    pageSize * currentPage
  );

  return (
    <table>
      <thead>
        <tr>
          <th>First</th>
          <th>Last</th>
          <th>Email</th>
          <th>Phone1</th>
        </tr>
      </thead>
      <tbody>
        {display.map(c => (
          <tr key={c.phone1}>
            <td>{c.firstName}</td>
            <td>{c.lastName}</td>
            <td>{c.email}</td>
            <td>{c.phone1}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Results;
