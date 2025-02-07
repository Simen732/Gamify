import { createContext, useEffect, useState } from "react";

import axios from "axios"

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/auth/user`, {withCredentials: true})
            .then((response) => {
                console.log(response.data, "This is the response data")
                setUser(response.data.user);
        })  
        .catch((error) =>{
            console.log(error, "Dette er erororororor på authContext.js")
            setUser(null)
        })
    }, [])

    return(
        <AuthContext.Provider value={{user}}> {children}</AuthContext.Provider> 
    )
}   

export default AuthProvider;