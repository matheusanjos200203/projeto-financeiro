import './Main.css';
const Main = () => {
    return(
        <main className="paginaPrincipal">
            <section className="Balance">
                <div className="Balance-Cards">
                    <div className="Card Entradas">
                        <h3>Entradas</h3>
                        <p>R$100,00</p>
                    </div>
                    <div className="Card Saidas">
                        <h3>Saídas</h3>
                        <p>R$100,00</p>
                    </div>
                    <div className="Card Saldo">
                        <h3>Saldo</h3>
                        <p>R$100,00</p>
                    </div>
                </div>
            </section>
            <section className="Transferencias">
                <table>
                    <thead>
                        <tr>
                            <th>Descrição</th>
                                <th>Valor</th>
                                <th>Data</th>
                                <th>Data de Pagamento</th>
                                <th>Data de Vecimento</th>
                            </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Posto Ipiranga</td>
                            <td>R$100,00</td>
                            <td>10/09/2022</td>
                            <td>10/09/2022</td>
                            <td>10/09/2022</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </main>
    );
}

export default Main;