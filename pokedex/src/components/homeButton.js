import React from 'react';

const HomeButton = (props) => {
    console.log(props.home)
        return (
<nav aria-label="breadcrumb">
<ol class="breadcrumb">
  <li class="breadcrumb-item" onClick={props.function}>Home</li>
  <li class="breadcrumb-item active" aria-current="page">{props.name.toUpperCase()}</li>
</ol>
</nav>
        )
    }

    export default HomeButton;