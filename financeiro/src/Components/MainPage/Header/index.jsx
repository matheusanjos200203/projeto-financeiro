import React from "react";
import './Header.css';

const Header = () => {
    return(
        <header className="Header">
            <h1>Controle Financ3iro</h1>
            <nav>
                <ul>
                    <li>+ Nova Transação</li>
                    <li>Sobre</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;