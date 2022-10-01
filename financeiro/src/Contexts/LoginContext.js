import { createContext, useState } from "react";

export const LoginDisplayContext = createContext(true);

const LoginDisplayProvider = (props) => {
    
    const [loginDisplay, setLoginDisplay] = useState(true);

    return(
        <LoginDisplayContext.Provider value={{loginDisplay:loginDisplay, setLoginDisplay:setLoginDisplay}}>
            {props.children}
        </LoginDisplayContext.Provider>
    );
}

export default LoginDisplayProvider;