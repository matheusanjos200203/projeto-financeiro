import React from "react";

const LinkButton = (props) => {
    return(
        <a href="#" id = {props.id} className={props.className} onClick={props.onClick}>{props.children}</a>
    );
}

export default LinkButton;