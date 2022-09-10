import React from "react";

const LinkButton = (props) => {
    return(
        <a href="#" className={props.className}>{props.children}</a>
    );
}

export default LinkButton;