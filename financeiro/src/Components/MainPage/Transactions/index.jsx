import React from "react";
import './Transactions.css';
const Transactions = () => {
    return(
        <section className="Transactions">
            <table className="Table Transactions">
                <thead>
                    <tr>
                        <th>Descrição</th>
                        <th>Valor</th>
                        <th>Data</th>
                        <th>Data de Vencimento</th>
                        <th>Data de Pagamento</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="description">Posto Ale</td>
                        <td className="income">R$50,00</td>
                        <td className="date">01/10/2022</td>
                        <td className="date">01/10/2022</td>
                        <td className="date">01/10/2022</td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
}

export default Transactions;