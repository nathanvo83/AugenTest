import React, { useContext } from "react";
import AppContext from "./AppContext";

function Pagination() {
  const context = useContext(AppContext);
  const { pageSize, currentPage, resultList } = context;
  const totalRecord = resultList.length;
  const maxPage = Math.ceil(totalRecord / pageSize);

  const privHandler = () => {
    if (currentPage > 1) {
      context.setCurrentPage(currentPage - 1);
    }
  };
  const nextHandler = () => {
    if (currentPage < maxPage) {
      context.setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div>
      {/* <div>{pageSize}</div>
      <div>{currentPage}</div>
      <div>{totalRecord}</div> */}
      <div>
        {pageSize * (currentPage - 1) + 1} -{" "}
        {Math.min(pageSize * currentPage, totalRecord)} of {totalRecord}
      </div>

      <button onClick={privHandler}> Priv </button>
      <button onClick={nextHandler}> Next </button>
    </div>
  );
}

export default Pagination;
