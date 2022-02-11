import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './main-page.css';
import Header from "./header";
import axios from "axios";
import MainEvents from "./main-events";
import Event from "../event";

function App() {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    axios.get("https://api.hackthenorth.com/v3/events")
      .then(response => {
        setEvents(response.data);
      })
  }, [])

  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<MainEvents events={events}></MainEvents>}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
