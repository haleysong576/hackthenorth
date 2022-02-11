import "./event.css";
import { Card, Button } from "react-bootstrap";
import { Holder } from "holderjs";

const Event = ({ eve }) => {
    
    <script src="holder.js"></script>
    return (
        <Card style={{ width: '25rem', marginTop: 20 }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>{eve.name}</Card.Title>
                <Card.Text>
                    {eve.description? eve.description: ""}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}

export default Event;