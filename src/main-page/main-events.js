import Event from "../event";

const MainEvents = ({events})  => {
    // const eventList = events.map((d) => { <Event eve={d} />});
    if (events) 
        return (
            <div>
                <div className="row featuredEvent">
                    <h3 className="col-md-12 text-center">Our main events</h3>
                </div>
                <div style={{display: "flex", flexDirection: "row", flexWrap:"wrap", justifyContent: "space-around"}}>
                    {events.map((d) => { 
                        if (d.permission != "private")
                            return <Event eve={d} key={d.id} />
                    })}
                </div>
            </div>
        );
    return <div>No events at this time</div>
}

export default MainEvents;