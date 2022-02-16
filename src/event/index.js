import "./event.css";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Events = ({ eve, token }) => {
    const navigate = useNavigate();

    // function to convert unix timestamp into time that people can easily recognize (calendar time)
    function timeConverter(UNIX_timestamp){
        var a = new Date(UNIX_timestamp);
        var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var hour = a.getHours();
        var min = a.getMinutes();
        let minutes = "";
        if (min < 10)
            minutes = "0" + min;
        else 
            minutes = "" + min;
        var time = month + ' ' + date + ', ' + year + ' at ' + hour + ':' + minutes;
        return time;
    }

    // use new url to view related events
    const seeRelated = () => {
        navigate(`/${eve.id}`)
    }
    
    return (
        <Card bg='dark' border="light" text='white' className="card-container">
            <Card.Body className="font-link">
                <Card.Title>{eve.name}</Card.Title>
                <Card.Text>
                    {eve.description? eve.description: ""}
                </Card.Text>
                <Card.Text>
                    Start Date: {eve.start_time? timeConverter(eve.start_time): ""}
                </Card.Text>
                <Card.Text>
                    End Date: {eve.end_time? timeConverter(eve.end_time): ""}
                </Card.Text>
                <Card.Text>
                    Speakers: {eve.speakers.map((d, index) => {
                        if (index == 0) 
                            return d.name;
                        else 
                            return ", " + d.name; })}
                </Card.Text>
                {eve.public_url? <Button href={eve.public_url} variant="outline-success">Public URL</Button>: null}
                {eve.private_url && token? <Button href={eve.private_url} variant="outline-success">Private URL</Button>: null}
                <Button onClick={seeRelated} variant="outline-success">See related events</Button>
                </Card.Body>
        </Card>
    )
}

export default Events;