import React from 'react';
import '../assets/css/loadMore.css'


const Buttons = (props) => {

    return (
        <>  
            <br />
                <button type="button" className="btn btn-danger resizeLoadBtn" onClick={props.loadMorePoke}>Load More</button>
            <br /> <br />
        </>
    )
}

export default Buttons;