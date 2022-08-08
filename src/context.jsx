
import React, { useContext, useReducer, useEffect} from 'react'
import reducer from "./reducer";


// create context
const AppContext = React.createContext();

// provider

const initialState = {
    name: "",
    image: "",
  };

const AppProvider = ({children}) =>{
    
    const [state, dispatch] = useReducer(reducer, initialState)


    const updateHomePage = () => {
        return dispatch({
          type: "HOME_UPDATE",
          payload: {
            name: "Techinicalweb",
            image: "./images/hero.svg",
          },
        });
      };
    
      const udpateAboutPage = () => {
        return dispatch({
          type: "ABOUT_UPDATE",
          payload: {
            name: "ABOUT US",
            image: "./images/about1.svg",
          },
        });
    };


    return(
        <AppContext.Provider value={{...state, updateHomePage, udpateAboutPage}}>
            {children}
        </AppContext.Provider>
    )
}



// global custom hook

const useGlobalContext = () =>{
    return useContext(AppContext)
}


// consumer

export { AppProvider, useGlobalContext }