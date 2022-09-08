import React from "react";
import './style.css';

const Login = () => {
    return(
        <div className="paginaInicial">
            <section className="Login">
                <h1>
                    BEM-VINDO AO FINC3IRO
                </h1>

                <p>Realize o login ou faça o cadstro ao lado -{`>`} </p>

                <form action="submit" id="formLogin">
                    <fieldset className="campoLogin">
                        <label htmlFor="emailLogin" className="labelLogin">Email</label>
                        <input type="text" htmlFor="emailLogin" placeholder="Email" required className="inputLogin" autoComplete="userName"/>
                        <label htmlFor="senha" className="labelLogin">Senha</label>
                        <input type="password" name="senhaLogin" id="senhaLogin" placeholder="Senha" required className="inputLogin" autoComplete="current-password"/>
                    </fieldset>
                    <button type="submit">Entrar</button>
                </form>

            </section>
            <section className="Cadastro">
                Cadastro
            </section>
        </div>
    );
}

export default Login;