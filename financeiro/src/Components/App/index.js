import Cadastro from '../HomePage/Cadastro';
import Home from '../HomePage/Home';
import Login from '../HomePage/Login';
import Balance from '../MainPage/Balance';
import Content from '../MainPage/Content';
import Footer from '../MainPage/Footer';
import Header from '../MainPage/Header';
import Transactions from '../MainPage/Transactions';
import './reset.css';
import './style.css';

function App() {
  return (
    <main className="App">
      {/* <Home>
        <Login></Login>
        <Cadastro></Cadastro>
      </Home> */}
      <Header></Header>
      <Content>
        <Balance></Balance>
        <Transactions></Transactions>
        <Footer></Footer>
      </Content>
    </main>
  );
}

export default App;
