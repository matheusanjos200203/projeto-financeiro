import React from "react";
import './Login.css';

const Home = (props) => {
    return(
        <div className="paginaInicial">
            {props.children}
        </div>
    );
}

export default Home;