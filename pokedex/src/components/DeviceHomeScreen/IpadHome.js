import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Media from 'react-media';


//COMPONENTS



//CSS
import '../../App.css';
import '../../assets/device/devices.min.css';
import './IpadHome.css'


class IpadHome extends Component {
    constructor(props) {
        super(props)

        this.state = {
            appClicked: false,
        }
    }




    render() {
        return (<>
            <div className="container-fluid font" style={{
                backgroundColor: "#2a2a72",
                backgroundImage: "linear-gradient(315deg, #2a2a72 0%, #009ffd 74%)", height: "100%"
            }}>
                <div className="row pt-5 mb-3"></div>
                <div className="row">
                    <div className="col">
                        <Media query={{ maxWidth: 1148 }}>
                            {matches =>
                                matches ? (
                                    <div className="marvel-device iphone-x">
                                        <div className="notch">
                                            <div className="camera"></div>
                                            <div className="speaker"></div>
                                        </div>
                                        <div className="top-bar"></div>
                                        <div className="sleep"></div>
                                        <div className="bottom-bar"></div>
                                        <div className="volume"></div>
                                        <div className="overflow">
                                            <div className="shadow shadow--tr"></div>
                                            <div className="shadow shadow--tl"></div>
                                            <div className="shadow shadow--br"></div>
                                            <div className="shadow shadow--bl"></div>
                                        </div>
                                        <div className="inner-shadow"></div>
                                        <div className="screen">
                                            <div className="container-fluid homeScreenMed" style={{ height: "100%" }}>
                                                <div className="row" style={{ paddingTop: "150px", paddingLeft: "30px" }}>
                                                    <div className="col-3"></div>
                                                    <div className="col-2">
                                                        <button style={{
                                                            backgroundColor: "#a40606",
                                                            backgroundImage: "linear-gradient(315deg, #a40606 0%, #d98324 74%)",
                                                            color: "white", height: "75px", width: "80px", borderRadius: "20px", marginLeft: "26px", fontSize: "40px"
                                                        }}><Link to="/pokedex"><img src="https://www.pngarts.com/files/4/Pokeball-Transparent.png" style={{ width: "80%" }} alt="Pokedex App Button" /></Link></button>
                                                        <p style={{ paddingLeft: "40px", paddingTop: "10px", fontFamily: "sans-serif", fontSize: "13px", color: "white" }}>Pokedex</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="home"></div>
                                    </div>
                                ) : (
                                        <div className="marvel-device ipad silver landscape" style={{ margin: "auto auto" }}>
                                            <div className="camera"></div>
                                            <div className="screen">
                                                <div className="container-fluid homeScreenLarge" style={{ height: "100%" }}>
                                                    <div className="row" style={{ paddingTop: "89px", paddingLeft: "30px" }}>
                                                        <div className="col-3"></div>
                                                        <div className="col-2">
                                                            <button style={{
                                                                backgroundColor: "#42378f",
                                                                backgroundImage: "linear-gradient(315deg, #42378f 0%, #f53844 74%)",
                                                                color: "white", height: "75px", width: "80px", borderRadius: "20px", marginLeft: "26px", fontSize: "40px"
                                                            }}><Link to="/pokedex"><img src="https://www.pngarts.com/files/4/Pokeball-Transparent.png" style={{ width: "80%" }} alt="Pokedex App Button" /></Link></button>
                                                            <p style={{ paddingLeft: "40px", paddingTop: "7px", fontFamily: "sans-serif", fontSize: "13px", color: "white" }}>Pokedex</p>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="home">
                                                <Link to='/'><button style={{ height: "100%", width: "100%", backgroundColor: "transparent", borderRadius: "50%" }}>
                                                </button></Link>
                                            </div>
                                        </div>
                                    )
                            }
                        </Media>
                    </div>
                    <div className="row py-5"> </div>
                </div>
            </div>
        </>
        )
    }
}

export default IpadHome;
