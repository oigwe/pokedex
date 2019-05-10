import React from 'react';

//CSS
import './dropdown.css';



const Dropdown = (props) => {

    return <p className="dropdownPara pt-1" onClick={props.click}>{props.name}</p>

}


export default Dropdown;