import React from 'react';

//CSS
import './homeButton.css'

const HomeButton = (props) => {
        return (
                <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                                <li class="breadcrumb-item pointer" onClick={props.function}>Home</li>
                                <li class="breadcrumb-item active" aria-current="page">{props.name.toUpperCase()}</li>
                        </ol>
                </nav>
        )
}

export default HomeButton;