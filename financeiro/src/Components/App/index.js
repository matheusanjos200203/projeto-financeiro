import Home from '../HomePage/Home';
import Login from '../HomePage/Login';
import Cadastro from '../HomePage/Cadastro';
import Header from '../MainPage/Header';
import Main from '../MainPage/Main';
import Footer from '../MainPage/Footer';
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
        <Main></Main>
        <Footer></Footer>
    </main>
  );
}

export default App;
