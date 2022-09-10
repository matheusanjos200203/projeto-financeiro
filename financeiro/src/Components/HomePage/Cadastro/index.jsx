import './Cadastro.css';
import LinkButton from '../Buttons/LinkButtons';
import Button from '../Buttons/Button';

const Cadastro = () => {
    return(
        <section className="Cadastro">
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
                        className='inputLogin'/>
                    
                    <label 
                        htmlFor="emailCadastro"
                        className='labelLogin'>Email</label>
                    
                    <input 
                        type="email" 
                        name='emailCadastro' 
                        placeholder='Nome de Usuário' 
                        required 
                        className='inputLogin'
                        autoComplete='userName'/>

                    <label htmlFor="senhaCadastro"
                    className='labelLogin'>Senha</label>

                    <input 
                        type="password"
                        name='senhaCadastro'
                        id='senhaCadastro'
                        placeholder='Senha'
                        required
                        className='inputLogin'
                        autoComplete='current-password' />
                </fieldset>
                <Button type='submit' className='formButton cadastroButton'>Cadastrar</Button>
                <LinkButton className = "togglePage">Login</LinkButton>
            </form>

        </section>
    );
}

export default Cadastro;