import './Header.css';
const Header = () => {
    return(
        <header className="Header">
            <h1>
                FINANC3IRO
            </h1>

            <nav>
                <ul>
                    <li>Nova Transação</li>
                    <li>Relatório</li>
                    <li>Sobre</li>
                </ul>
            </nav>
        </header>
    );
}
export default Header;