import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import { useState } from "react";
import './main-page.css';

const Filter = ({ setdataType, types }) => {
    const [type, setType] = useState("All"); 
    const handleSelect = (e) => {
        setType(e);
        setdataType(e);
    }
    
    return (
        <div className="filter">
            <h4 className="filterText">Filter by:</h4>
            <DropdownButton
                title={type}
                variant='success'
                onSelect={handleSelect}
            >
                {types.map(d => {return <Dropdown.Item key={d} eventKey={d}>{d}</Dropdown.Item>})}
            </DropdownButton>

        </div>
        
    );
    
    };

export default Filter;