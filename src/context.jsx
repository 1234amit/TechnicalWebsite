
import React, { useContext, useReducer, useEffect} from 'react'
import reducer from "./reducer";


// create context
const AppContext = React.createContext();


// call api

const API = "https://thapareactapi.up.railway.app";

// provider

const initialState = {
    name: "",
    image: "",
    services: [],
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


    const getServices = async(url) =>{
      try{
        const res = await fetch(url);
        const data = await res.json();
        dispatch({type: "GET_SERVICES", payload: data})

      }catch(error){
        console.log(error)
      }
    }


    // to call the api
    useEffect(()=> {
      getServices(API)
    },[])


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