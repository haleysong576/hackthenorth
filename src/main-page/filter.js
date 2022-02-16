import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import { useState } from "react";
import Cookies from 'universal-cookie';
import './main-page.css';

const Filter = ({ dataType, setdataType, types }) => {
    const [type, setType] = useState(dataType); 
    const cookies = new Cookies();
    
    // filter the event types
    const handleSelect = (e) => {
        setType(e);
        setdataType(e);
        cookies.set("dataType", e);
    }
    
    return (
        <div className="filter">
            <h4 className="filterText">Filter by:</h4>
            <DropdownButton
                title={type}
                variant='success'
                onSelect={handleSelect}
                className="filterDropdown"
            >
                {types.map(d => {return <Dropdown.Item key={d} eventKey={d}>{d}</Dropdown.Item>})}
            </DropdownButton>

        </div>
        
    );
    
    };

export default Filter;