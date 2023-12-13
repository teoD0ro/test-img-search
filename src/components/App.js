import React, { useState, useEffect } from 'react'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';

import Main from './Main';
import Search from './Search';

function App() {
  const [imgs, setImgs] = useState([]);
  const [page, setPage] = useState(1);
  const [fetching, setFetching] = useState(false);

  return (
    <Routes>
      <Route path="/"
        element={<Main
          setImgs={setImgs}
          setPage={setPage}
          setFetching={setFetching}
        />}
      />
      <Route path="/search/:request"
        element={<Search
          setImgs={setImgs}
          setPage={setPage}
          setFetching={setFetching}
          imgs={imgs}
          page={page}
          fetching={fetching}
        />}
      />
    </Routes>

  );
}

export default App;
