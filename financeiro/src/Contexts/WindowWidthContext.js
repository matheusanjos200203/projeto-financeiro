import { createContext, useState, useEffect } from "react";

export const WindowWidthContext = createContext(true);

const WindowWidthProvider = (props) => {
    
    const useWindowWidth = () => {
        const getWindowWidth = () => ({
            innerWidth: window.innerWidth,
        })
        const [windowWidth, setWindowWidth] = useState(getWindowWidth());
        const handleResize = () => {
            setWindowWidth(getWindowWidth());
        }
        useEffect(() => {
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        })
        return windowWidth;
    }
    
    return(
        <WindowWidthContext.Provider value={{windowWidth: useWindowWidth}}>
            {props.children}
        </WindowWidthContext.Provider>
    );
}

export default WindowWidthProvider;