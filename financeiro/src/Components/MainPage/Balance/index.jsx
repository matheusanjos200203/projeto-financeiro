import React from "react";
import './Balance.css'

const Balance = () => {
    return(
        <section className="Balance">
            <div className="Cards">
                <div className="Card Entrada">
                    <h2>Entradas</h2>
                    <p>R$1000,00</p>
                </div>
                <div className="Card Saida">
                    <h2>Saídas</h2>
                    <p>R$1000,00</p>
                </div>
                <div className="Card Total">
                    <h2>Total</h2>
                    <p>R$1000,00</p>
                </div>
            </div>
        </section>
    );
}

export default Balance;