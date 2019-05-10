import React from 'react';
import Media from 'react-media';

//CSS
import './header.css';

const Header = (props) => {
    return ( <div className="headerBackground">
        <Media query={{ maxWidth: 1148 }}>
            {matches =>
                matches ? (<>
                    <div className="row pt-5"></div>
                    <div className="row dark">
                        <div className="col"></div>
                        <div className="col">
                            <h1 onClick={props.click} style={{textAlign: "center", fontSize: "35px"}}>PursuitPokedex</h1>
                            <input type="text" className="form-control w100" aria-label="Default" aria-describedby="inputGroup-sizing-default" value={props.inputValue} onChange={props.onChange} />
                        </div>
                        <div className="col"></div>
                    </div>
                </>
                ) : (<>
                    <div className="row">
                        <span class="dot" style={{ backgroundColor: "red" }}></span>
                        <span class="dot" style={{ backgroundColor: "yellow" }}></span>
                        <span class="dot" style={{ backgroundColor: "green" }}></span>
                    </div>
                    <div className="row dark">
                        <div className="col">

                        </div>
                        <div className="col">
                            <h1 onClick={props.click}>PursuitPokedex</h1>
                            <input type="text" className="form-control w100" aria-label="Default" aria-describedby="inputGroup-sizing-default" value={props.inputValue} onChange={props.onChange} />
                        </div>
                        <div className="col">

                        </div>
                    </div>
                </>)
            }
            </Media>
        </div>
    )
        }
        
        
        export default Header;
        