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
    <table className="table-result">
      <thead>
        <tr>
          <th className="th-result left-align">First</th>
          <th className="th-result left-align">Last</th>
          <th className="th-result left-align">Email</th>
          <th className="th-result rigth-align">Phone1</th>
        </tr>
      </thead>
      <tbody>
        {display.map(c => (
          <tr key={c.phone1}>
            <td className="td-result">{c.firstName}</td>
            <td className="td-result">{c.lastName}</td>
            <td className="td-result">{c.email}</td>
            <td className="td-result rigth-align">{c.phone1}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Results;
