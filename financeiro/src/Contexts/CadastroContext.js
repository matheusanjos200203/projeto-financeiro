import { createContext, useState } from "react";

export const CadastroDisplayContext = createContext(true);

const CadastroDisplayProvider = (props) => {
    
    const [cadastroDisplay, setCadastroDisplay] = useState(false);

    return(
        <CadastroDisplayContext.Provider value={{cadastroDisplay:cadastroDisplay, setCadastroDisplay:setCadastroDisplay}}>
            {props.children}
        </CadastroDisplayContext.Provider>
    );
}

export default CadastroDisplayProvider;