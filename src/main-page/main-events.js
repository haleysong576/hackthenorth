import Event from "../event";
import { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./filter";
import Cookies from 'universal-cookie';
import Header from "./header";
import logo from "./GloboLogo.png";
import clipArt from "./hackathonArt.png"
import './main-page.css';
const MainEvents = ({ token, setToken})  => {
    const cookies = new Cookies();
    const [events, setEvents] = useState([]);
    const [dataType, setdataType] = useState(cookies.get("dataType")? cookies.get("dataType"): "All");
    let extra = " Please log in if you want the access to private events.";
    let types = ["All"];

    // retrieve data from the endpoint
    useEffect(() => {
        axios.get("https://api.hackthenorth.com/v3/events")
          .then(response => {
            let arr = response.data;
            arr.sort(function compare(first, second) {
              if (first.start_time < second.start_time)
                return -1;
              else 
                return 1;
              });
            setEvents(arr);
          })
          
      }, [])

    // filter data depending on the private / public data and the type of the event
    const filter = () => {
        let data = events.map((d) => { 
            if (((d.permission == "private" && token) || d.permission == "public") &&(dataType == "All" || dataType == d.event_type)) {
                return  <Event eve={d} key={d.id} token={token} />
            }
                        
        })
        return data;
        
    }

    // if there is data to show, display, and if not display a message
    if (events){ 
        events.map(d => {if (!types.includes(d.event_type)) types.push(d.event_type)})
        return (
            <div>
                <Header token={token} setToken={setToken}/>
                <div className="main">
                    <img src={logo} alt="logo"/>
                </div>
                <div>
                    <h1 className="title">Hackathon Global Inc.™</h1>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <img className="smallLogo" src={clipArt} alt="logo"/>
                    </div>
                    <h2 className="description">
                        Here at Hackathon Global Inc.™, we've been running hackathons successfully for the past 19 years. Due to the pandemic, we are hosting a fully virtual event. 
                        {!token? extra: null} 
                    </h2>
                    <h1 className="description">
                        Featured Events
                    </h1>
                </div>
                <div>
                    {events.length > 0? <Filter dataType={dataType} setdataType={setdataType} types={types} />: null}
                </div>
                <div className="noEvent">
                    {events.length > 0? filter(): <h2>No related events at this time</h2>}
                </div>
            </div>
        );
    }
    return <div>No events at this time</div>
}

export default MainEvents;