import Event from "../event";
import { useState, useEffect } from "react";
import { useNavigate, useParams,  } from "react-router-dom";
import axios from "axios";
import Filter from "./filter";
import Cookies from 'universal-cookie';
import { Button } from "react-bootstrap";

import logo from "./GloboLogo.png";
const MainEvents = ({ token, setToken})  => {
    const [events, setEvents] = useState([]);
    const [dataType, setdataType] = useState("All");
    const cookies = new Cookies();
    const navigate = useNavigate();
    const { eventId } = useParams();
    let extra;
    let types = ["All"];
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
   
    
    if (eventId && events[eventId - 1]) {
        extra = <div><h4>Related events to: {events[eventId - 1].name}</h4></div>;
    }
    const onSubmit = () => {
        navigate('/login');
    };
    const logout = () => {
        setToken(false);
        cookies.set('Auth', false);
    };
    const homeClick = () => {
        navigate('/');
    }
    const filter = () => {
        if (eventId) {
            let inx = eventId - 1;
            if (events[inx].permission == "private" && !token)
                return <h2>Requested event is private. Please log in if you want to see the details.</h2>
            let data = events[inx].related_events.map(d=> {
                if (((events[d-1].permission == "private" && token) || events[d-1].permission == "public") && (dataType == "All" || dataType == events[d-1].event_type)) 
                    return <Event eve={events[d-1]} key={events[d-1].id} token={token} />

            })
            data.filter(n => n)
            if (data.length > 0) 
                return data;
            else 
                return <h2>No related events at this time</h2>
        }
        else {
            let data = events.map((d) => { 
                if (((d.permission == "private" && token) || d.permission == "public") &&(dataType == "All" || dataType == d.event_type)) {
                    return  <Event eve={d} key={d.id} token={token} />
                }
                            
            })
            return data;
        }
    }
    if (events) 
        events.map(d => {if (!types.includes(d.event_type)) types.push(d.event_type)})
        return (
            <div>
                {!token? <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                <Button
                    variant="success"
                    onClick={onSubmit}
                >
                    Login
                </Button>
            </div>: <div style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
                {/* <h8>Welcome back!</h8> */}
                <Button
                    variant="success"
                    onClick={logout}
                >
                    Logout
                </Button></div>}
                <div className="main">
                    <img src={logo} alt="logo" onClick={homeClick}/>
                </div>
                <div>
                    {events.length > 0? <Filter setdataType={setdataType} types={types} />: null}
                </div>
                {extra? extra: null}
                <div style={{display: "flex", flexDirection: "row", flexWrap:"wrap", justifyContent: "space-around"}}>
                    {events.length > 0? filter(): <h2>No related events at this time</h2>}
                </div>
            </div>
        );
    return <div>No events at this time</div>
}

export default MainEvents;