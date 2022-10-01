import './Login.css';
import LinkButton from "../Buttons/LinkButtons";
import Button from '../Buttons/Button';
import { useState, useContext } from 'react';
import { LoginDisplayContext } from '../../../Contexts/LoginContext';
import { CadastroDisplayContext } from '../../../Contexts/CadastroContext';
import { WindowWidthContext } from '../../../Contexts/WindowWidthContext';
const Login = () => {
    const {cadastroDisplay, setCadastroDisplay} = useContext(CadastroDisplayContext);
    const {loginDisplay, setLoginDisplay} = useContext(LoginDisplayContext);
    const {windowWidth} = useContext(WindowWidthContext);

    const Controler = () => {
        setCadastroDisplay(prev => !prev);
        setLoginDisplay(prev => !prev);
    }

    let sectionClassName, togglePageClassName = "togglePage";
    windowWidth().innerWidth > 940 ? sectionClassName = "Login" : loginDisplay ? sectionClassName = "Login" : sectionClassName = "Login OFF";

    return(
        // <UserProvider>
            <section className={sectionClassName}>
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
                    <LinkButton id="toggleLoginButton" className = {togglePageClassName} onClick = {() => {Controler()}}>Cadastre-se</LinkButton>
                </form>
            </section>
        // {/* </UserProvider> */}
    );
}

export default Login;