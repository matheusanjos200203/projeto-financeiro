import './Login.css';
import LinkButton from "../Buttons/LinkButtons";
import Button from '../Buttons/Button';

const Login = () => {
    return(
        <section className="Login">
        {/* <img src={HomeMobile} alt="Análise Métrica Finanças" className="ImgMobile" /> */}
        <h1>
            BEM-VINDO AO FINC3IRO
        </h1>

        <p>Acesse sua conta agora mesmo!</p>

        <form action="submit" className="formHome" id="formLogin">
            <fieldset className="campoLogin">
                <label htmlFor="emailLogin" className="labelLogin">Email</label>
                <input type="email" name="emailLogin" placeholder="Email" required className="inputLogin" autoComplete="userName"/>
                <label htmlFor="senha" className="labelLogin">Senha</label>
                <input type="password" name="senhaLogin" id="senhaLogin" placeholder="Senha" required className="inputLogin" autoComplete="current-password"/>
            </fieldset>
            
            <Button type='submit' className='formButton loginButton'>Entrar</Button>
            <LinkButton className = "togglePage" >Cadastre-se</LinkButton>
        </form>
    </section>

    );
}

export default Login;