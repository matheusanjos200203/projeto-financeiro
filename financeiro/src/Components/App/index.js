import Cadastro from '../HomePage/Cadastro';
import Home from '../HomePage/Home';
import Login from '../HomePage/Login';
import './reset.css';
import './style.css';

function App() {
  return (
    <main className="App">
      <Home>
        <Login></Login>
        <Cadastro></Cadastro>
      </Home>
    </main>
  );
}

export default App;
