import React from "react";
import './Content.css';

const Content = (props) => {
    return(
        <div className="container">
            {props.children}
        </div>
    );
}

export default Content;