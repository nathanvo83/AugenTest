import React, { useContext } from "react";
import AppContext from "./AppContext";

function Results() {
  const context = useContext(AppContext);
  const { pageSize, currentPage, resultList } = context;

  const display = resultList.slice(
    pageSize * (currentPage - 1),
    pageSize * currentPage
  );

  // const firstHandler = () => {
  //   // console.log(resultList);
  //   // var result = resultList.sort((a, b) =>
  //   //   a.firstName.localeCompare(b.firstName)
  //   // );
  //   context.setResultList(context.data);

  //   // // console.log(result);
  //   console.log(context.resultList);
  // };

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
