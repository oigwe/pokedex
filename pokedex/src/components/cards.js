import React from 'react'
import '../assets/css/card.css'

const Card = (props) => {
        return (
            <>                
             <div className="card" onClick={e=>props.profile(props.pokeData.name)}>
                <div className="holder">
                    <div className="col col-3">
                       <img src={props.pokeData.icon} alt='' /> 
                    </div>
                    <div className="col col-6">
                        {props.pokeData.name}                        
                   </div>
                   <div className="col col-3"> 
                        # {props.pokeData.id}  
                   </div>
                </div>
             </div>
            </>
        )
    }

export default Card;
