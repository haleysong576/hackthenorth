import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './main-page.css';
import Cookies from 'universal-cookie';
// import Header from "./header";

import MainEvents from "./main-events";
import Login from "../log-in";

function App() {
  const [token, setToken] = useState(false);
  const cookies = new Cookies();
  useEffect(() => {
    if (cookies.get('Auth')) {
      setToken("true" == cookies.get('Auth'))
    }
  }, [])
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/login" element={<Login setToken={setToken}/>}>
          </Route>
          <Route path="/:eventId" element={<MainEvents token={token} setToken={setToken}></MainEvents> }>
          </Route>
          <Route path="/" element={<MainEvents token={token} setToken={setToken}></MainEvents> }>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
