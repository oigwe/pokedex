import React from 'react';
import '../assets/css/dropdown.css';



const Dropdown = (props) => {

    return <p onClick={props.click}>{props.name}</p>

}


export default Dropdown;