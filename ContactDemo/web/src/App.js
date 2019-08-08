import React, {useEffect, useState} from 'react';
import Results from "./components/Results";
import Search from "./components/Search";
import Pagination from "./components/Pagination";
import AppContext from "./components/AppContext";
import axios from "axios";



function App() {
  const size = 10;
  const API_URL = "https://localhost:44351/api/contacts";

  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [resultList, setResultList] = useState([]);
  const [pageSize, setPageSize] = useState(size);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalRecords, setTotalRecords] = useState(0);

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
    axios.get(API_URL).then(res => {
      setData(res.data)
      setQuery("")
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
      <Search />
      <Results />
      <Pagination />
    </AppContext.Provider>
  );
}

export default App;
