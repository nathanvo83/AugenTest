import React, { useContext } from "react";
import AppContext from "./AppContext";

function Results() {
  const context = useContext(AppContext);
  const { pageSize, currentPage, resultList } = context;

  const display = resultList.slice(
    pageSize * (currentPage - 1) + 1,
    pageSize * currentPage
  );

  return (
    <div>
      <table>
        <thead>
          <th>First</th>
          <th>Last</th>
          <th>Email</th>
          <th>Phone1</th>
        </thead>
        <tbody>
          {display.map(c => (
            <tr>
              <td>{c.firstName}</td>
              <td>{c.lastName}</td>
              <td>{c.email}</td>
              <td>{c.phone1}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Results;
