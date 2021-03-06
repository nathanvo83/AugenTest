import React, { useContext } from "react";
import AppContext from "./AppContext";

function Pagination() {
  const context = useContext(AppContext);
  const { pageSize, currentPage, resultList } = context;
  const totalRecord = resultList.length;
  const maxPage = Math.ceil(totalRecord / pageSize);

  // prev handler
  const prevHandler = () => {
    if (currentPage > 1) {
      context.setCurrentPage(currentPage - 1);
    }
  };

  // next handler
  const nextHandler = () => {
    if (currentPage < maxPage) {
      context.setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div>
      <div>
        <label className="pagination-info">
          {pageSize * (currentPage - 1) + 1} -{" "}
          {Math.min(pageSize * currentPage, totalRecord)} of {totalRecord}
        </label>

        <button
          className="pagination-button"
          disabled={currentPage === 1}
          onClick={prevHandler}
        >
          {" < "}
        </button>

        <button
          className="pagination-button"
          disabled={currentPage === maxPage}
          onClick={nextHandler}
        >
          {" > "}
        </button>
      </div>
    </div>
  );
}

export default Pagination;
