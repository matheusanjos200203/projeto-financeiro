import Cadastro from '../HomePage/Cadastro';
import Home from '../HomePage/Home';
import Login from '../HomePage/Login';
import Balance from '../MainPage/Balance';
import Content from '../MainPage/Content';
import Footer from '../MainPage/Footer';
import Header from '../MainPage/Header';
import Transactions from '../MainPage/Transactions';
import LoginDisplayProvider from '../../Contexts/LoginContext';
import CadastroDisplayProvider from '../../Contexts/CadastroContext';
import WindowWidthProvider from '../../Contexts/WindowWidthContext';
import './reset.css';
import './style.css';
function App() {
  return (
    <main className="App">
      <WindowWidthProvider>
      <LoginDisplayProvider> 
        <CadastroDisplayProvider>
        <Home>
          <Login></Login>
          <Cadastro></Cadastro>
        </Home>
        </CadastroDisplayProvider>
      </LoginDisplayProvider>
      </WindowWidthProvider>

      {/* <Header></Header>
      <Content>
        <Balance></Balance>
        <Transactions></Transactions>
        <Footer></Footer>
      </Content> */}
    
    </main>
  );
}

export default App;
