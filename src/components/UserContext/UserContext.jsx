import { createContext, useState } from "react";

export const UserContext = createContext({
    isAdmin: false,
    isLogged: false,
})

export const UserProvider = ({children}) => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [isLogged, setIsLogged] = useState(false);

    const setAdminTrue = (value) =>{
        setIsAdmin(value)
    }

    const setLoggedTrue = () =>{
        setIsLogged(true)
    }

    return(
        <UserContext.Provider value={{isAdmin, setAdminTrue, isLogged, setLoggedTrue}}>
            {children}
        </UserContext.Provider>
    )
}

