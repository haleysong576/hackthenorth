import Event from "../event";
import { useState, useEffect } from "react";
import { useNavigate, useParams,  } from "react-router-dom";
import axios from "axios";
import Filter from "./filter";
import Cookies from 'universal-cookie';
import { Button } from "react-bootstrap";

import logo from "./GloboLogo.png";
import clipArt from "./hackathonArt.png"
import Header from "./header";
const RelatedEvents = ({ token, setToken})  => {
    const cookies = new Cookies();
    const [events, setEvents] = useState([]);
    const [dataType, setdataType] = useState(cookies.get("dataType")? cookies.get("dataType"): "All");
    const navigate = useNavigate();
    const { eventId } = useParams();
    let extra;
    let types = ["All"];
    useEffect(() => {
        axios.get("https://api.hackthenorth.com/v3/events")
          .then(response => {
            let arr = response.data;
            setEvents(arr);
          })
          
      }, [])

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
       
        let inx = eventId - 1;
        if (events[inx].permission == "private" && !token)
            return <h2>Requested event is private. Please log in if you want to see its related events.</h2>
        let data = events[inx].related_events.map(d=> {
            if (((events[d-1].permission == "private" && token) || events[d-1].permission == "public") && (dataType == "All" || dataType == events[d-1].event_type)) 
                return <Event eve={events[d-1]} key={events[d-1].id} token={token} />
        })
        console.log(data);
        data = data.filter(n => n !== undefined);
        console.log(data);
        if (data.length > 0) 
            return data;
        else 
            return <h2 className="subtitle">No related events at this time</h2>
        
    }
    if (eventId && events[eventId - 1]) {
        extra = <div><h4 className="subtitle">Related events to: {events[eventId - 1].name}</h4></div>;
    }

    if (events){ 
        events.map(d => {if (!types.includes(d.event_type)) types.push(d.event_type)})
        return (
            <div>
                <Header token={token} setToken={setToken} />
                <div>
                    {events.length > 0? <Filter dataType={dataType} setdataType={setdataType} types={types} />: null}
                </div>
                {extra? extra: null}
                <div className="noEvent">
                    {events.length > 0? filter(): <h2>No related events at this time</h2>}
                </div>
            </div>
        );
    }
    return <div>No events at this time</div>
}

export default RelatedEvents;