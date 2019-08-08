import React, {useEffect, useState} from 'react';
import Results from "./components/Results";
import Search from "./components/Search";
import Pagination from "./components/Pagination";
import AppContext from "./components/AppContext";
import axios from "axios";



function App() {
  const size = 20;
  const API_URL = "https://localhost:44351/api/contacts";

  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [resultList, setResultList] = useState([]);
  const [pageSize, setPageSize] = useState(size);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalRecords, setTotalRecords] = useState(0);

  // declare context global
  const context = {
    data,
    setData,
    query,
    setQuery,
    resultList,
    setResultList,
    pageSize,
    setPageSize,
    currentPage,
    setCurrentPage,
    totalRecords,
    setTotalRecords
  };


  useEffect(() => {
    console.log("loading...")

    // did mount
    // get data and set init data
    axios.get(API_URL).then(res => {
      setData(res.data)
      setTotalRecords(res.data.length)
      setResultList(res.data)
    })

    // did unmount
    return () => {
      // cleanup
      console.log("cleanup")
    };
  }, []);
  
  

  return (
    <AppContext.Provider value={context}>
      <table className="table-header">
        <tbody>
          <tr>
            <td><Search /></td>
            <td className="rigth-align"><Pagination /></td>
          </tr>
        </tbody>
      </table>
      
      <Results />
    </AppContext.Provider>
  );
}

export default App;
