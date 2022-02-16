import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './main-page.css';
import Cookies from 'universal-cookie';
import MainEvents from "./main-events";
import Login from "../log-in";
import RelatedEvents from "./related-event";
import Account from "../account";

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
          <Route path="/create" element={<Account setToken={setToken}/>}>
          </Route>
          <Route path="/:eventId" element={<RelatedEvents token={token} setToken={setToken}></RelatedEvents> }>
          </Route>
          <Route path="/" element={<MainEvents token={token} setToken={setToken}></MainEvents> }>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
