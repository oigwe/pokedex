import React from 'react';
import '../assets/css/header.css';

const Header = (props) => {
    return <>
        <div className="headerBackground">
            <div className="row">
                    <span class="dot" style={{backgroundColor: "red"}}></span>
                    <span class="dot" style={{backgroundColor: "yellow"}}></span>
                    <span class="dot" style={{backgroundColor: "green"}}></span>
            </div>
            <div className="row dark">
                <div className="col">
                    
                </div>
                <div className="col">
                    <h1>PursuitPokedex</h1>
                    <input type="text" className="form-control w100" aria-label="Default" aria-describedby="inputGroup-sizing-default" value={props.inputValue} onChange={props.onChange} />
                </div>
                <div className="col">

                </div>
            </div>
        </div>
    </>
}


export default Header;

/*<div className="pokeball pokeball_right">
                        <div className="pokeball__button"></div>
                    </div>*/