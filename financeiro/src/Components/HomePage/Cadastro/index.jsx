import './Cadastro.css';
import LinkButton from '../Buttons/LinkButtons';
import Button from '../Buttons/Button';
import { CadastroDisplayContext } from '../../../Contexts/CadastroContext';
import { LoginDisplayContext } from '../../../Contexts/LoginContext';
import { WindowWidthContext } from '../../../Contexts/WindowWidthContext';
import { useContext } from 'react';
import { useState } from 'react';
const Cadastro = () => {
    const {cadastroDisplay, setCadastroDisplay} = useContext(CadastroDisplayContext);
    const {loginDisplay, setLoginDisplay} = useContext(LoginDisplayContext);
    const {windowWidth} = useContext(WindowWidthContext);
    const [toggleActive, setToggleActive] = useState(true);

    const Controler = () => {
        setCadastroDisplay(prev => !prev);
        setLoginDisplay(prev => !prev);
    }

    let className, togglePageClassName = "togglePage";
    windowWidth().innerWidth > 940 ? className = "Cadastro" : cadastroDisplay ? className = "Cadastro" : className = "Cadastro OFF";

    return(
        <section className={className}>
            <h2>
                Cadastre-se
            </h2>

            <form action="submit" className='formHome' id='formCadastro'>
                <fieldset className="campoCadastro">
                    <label 
                        htmlFor="usuario"
                        className='labelLogin'>Nome de Usuário</label>
                    
                    <input 
                        type="text" 
                        name='usuario' 
                        placeholder='Nome de Usuário' 
                        required 
                        className='inputLogin inputCadastro'/>
                    
                    <label 
                        htmlFor="emailCadastro"
                        className='labelLogin inputCadastro'>Email</label>
                    
                    <input 
                        type="email" 
                        name='emailCadastro' 
                        placeholder='Nome de Usuário' 
                        required 
                        className='inputLogin inputCadastro'
                        autoComplete='userName'/>

                    <label htmlFor="senhaCadastro"
                    className='labelLogin inputCadastro'>Senha</label>

                    <input 
                        type="password"
                        name='senhaCadastro'
                        id='senhaCadastro'
                        placeholder='Senha'
                        required
                        className='inputLogin inputCadastro'
                        autoComplete='current-password' />
                </fieldset>
                <Button type='submit' className='formButton cadastroButton'>Cadastrar</Button>
                <LinkButton className = {togglePageClassName} onClick = {() => {Controler()}}>Login</LinkButton>
            </form>

        </section>
    );
}

export default Cadastro;