import React from 'react';
import Media from 'react-media';


import '../assets/css/profile.css';
import ModalExample from './modal';
import HomeButton from './homeButton';
import tags from '../services/tags'
import { UncontrolledTooltip } from 'reactstrap'





const Profile = (props) => {

    return <>
        <div className="container profileBackground font">
        <Media query={{ maxWidth: 1148}}>
            {matches =>
                matches ? (<>
                            <div className="row">
                <div className="col">
                        <HomeButton function={props.click} name={props.pokemonClicked.name} />
                </div>
            </div>
            <div className="row">
                    <div className="col">
                        <b> {props.pokemonClicked.id < 10 ? `#00${props.pokemonClicked.id}` : props.pokemonClicked.id > 99 ? `#${props.pokemonClicked.id}` : `#0${props.pokemonClicked.id}`}-{props.pokemonClicked.name.toUpperCase()}</b>
                    </div>
            </div>
            <div className="container">
                <div className="row">
                    <img src={props.pokemonClicked.profilePic} alt="Bulbasaur" className="imgS" />
                <div className="row d-flex flex wrap mr-3">
                            {props.pokemonClicked.sprites.map((e, i) => {
                                return e.url !== 'null' ? <div className="col-4" key={i}>
                                    <img src={e.url} id={`UncontrolledTooltipExample${i}`} alt={e.name} className="imgB" /><span style={{ textDecoration: "underline", color: "blue" }} href="#" ></span>
                                    <UncontrolledTooltip placement="top" target={`UncontrolledTooltipExample${i}`}>
                                        {e.name}
                                    </UncontrolledTooltip>
                                </div> : null
                            })}
                </div>
            </div>
            </div>
            <div className="row">
                {props.pokemonClicked.types.map((e, i) => {
                    return <button type="button" style={{ 'backgroundColor': tags[e] }} className="btn btn-outline-dark btn-lg active m-3 px-4" key={i}>{e}</button>
                })
                }
            </div>
            <div className="col align-self-start">
                <div className="col-b">
                    <b> Base Stats </b>
                </div>
                <table className="border table table-borderless" style={{overflow: "scroll", width: "50px"}}>
                    <thead>
                        <tr>
                            <th scope="col">HP</th>
                            <th scope="col">Attack</th>
                            <th scope="col">Defense</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {
                                props.pokemonClicked.stats.map((e, i) => {
                                    if(i< 3){
                                    return <td key={i}>{e[1]}</td>
                                    }
                                }).reverse()
                            }
                        </tr>
                    </tbody>
                </table>
                <table className="border table table-borderless" style={{overflow: "scroll", width: "50px"}}>
                    <thead>
                        <tr>
                            <th scope="col">Sp. Attack</th>
                            <th scope="col">Sp. Defense</th>
                            <th scope="col">Speed</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {
                                props.pokemonClicked.stats.map((e, i) => {
                                    if(i >= 3){
                                        return <td key={i}>{e[1]}</td>
                                    }
                                }).reverse()
                            }
                        </tr>
                    </tbody>
                </table>
                <div className="col align-self-start">
                    <div className="col-b">
                        <b> Moves </b>
                    </div>
                    <div>
                        <div className='col-12'>
                            {
                                props.pokemonClicked.moves.map((e, i) => {
                                    return <ModalExample pokeName={props.pokemonClicked.name} name={e[0]} url={e[1]} key={i} click={props.sidebar} />
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
                </>):(<>
            <div className="row">
                <div className="col align-self">
                    <div className="col">
                        <HomeButton function={props.click} name={props.pokemonClicked.name} />
                    </div>
                </div>
            </div>
            <div className="row justify-content-end">
                <div className='goRight'>
                    <div className="col">
                        <b> {props.pokemonClicked.id < 10 ? `#00${props.pokemonClicked.id}` : props.pokemonClicked.id > 99 ? `#${props.pokemonClicked.id}` : `#0${props.pokemonClicked.id}`}-{props.pokemonClicked.name.toUpperCase()}</b>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row justify-content">
                    <div className="col-6">
                        <div className="d-flex flex-row">
                            <img src={props.pokemonClicked.profilePic} alt="Bulbasaur" className="img" />
                        </div>
                    </div>
                    <div className="col-6 ">
                        <div className="row withMargin"></div>
                        <div className="d-flex flex-wrap">
                            {props.pokemonClicked.sprites.map((e, i) => {
                                return e.url !== 'null' ? <div className="col-3" key={i}>
                                    <img src={e.url} id={`UncontrolledTooltipExample${i}`} alt={e.name} className="imgB" /><span style={{ textDecoration: "underline", color: "blue" }} href="#" ></span>
                                    <UncontrolledTooltip placement="top" target={`UncontrolledTooltipExample${i}`}>
                                        {e.name}
                                    </UncontrolledTooltip>
                                </div> : null
                            })}
                        </div>
                        <div className="row withMargin"></div>
                    </div>
                </div>
            </div>
            <div className="row">
                {props.pokemonClicked.types.map((e, i) => {
                    return <button type="button" style={{ 'backgroundColor': tags[e] }} className="btn btn-outline-dark btn-lg active m-3 px-4" key={i}>{e}</button>
                })
                }
            </div>
            <div className="col align-self-start">
                <div className="col-b">
                    <b> Base Stats </b>
                </div>

                <table className=" border table table-borderless">
                    <thead>
                        <tr>
                            <th scope="col">HP</th>
                            <th scope="col">Attack</th>
                            <th scope="col">Defense</th>
                            <th scope="col">Sp. Attack</th>
                            <th scope="col">Sp. Defense</th>
                            <th scope="col">Speed</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {
                                props.pokemonClicked.stats.map((e, i) => {
                                    return <td key={i}>{e[1]}</td>
                                }).reverse()
                            }


                        </tr>
                    </tbody>
                </table>
                <div className="col align-self-start">
                    <div className="col-b">
                        <b> Moves </b>
                    </div>
                    <div>
                        <div className='col-12'>
                            {
                                props.pokemonClicked.moves.map((e, i) => {
                                    return <ModalExample className="padding-right: 1000" pokeName={props.pokemonClicked.name} name={e[0]} url={e[1]} key={i} />
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            </>
                )
                        }
                        </Media>
        </div>
    </>
}

export default Profile;