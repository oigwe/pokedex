import React from 'react';


const Buttons = (props) => {

    return (
        <>  
            <br />
                <button type="button" className="btn btn-danger btn-primary btn-lg btn-block loader" onClick={props.loadMorePoke}>Loading</button>
            <br /> <br />
        </>
    )
}

export default Buttons;