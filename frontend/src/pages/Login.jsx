import "../css/components/Login.css"
import { useState, useEffect, useContext } from "react";
import axios from "axios"
import { AuthContext } from "../auth/AuthContext";

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [msg, setMsg] = useState("")
    // const {user} = useContext(AuthContext)


    // if(user) window.location.href="/profile";
    function handleSubmit(e) {
        e.preventDefault();
        
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/auth/login`,
            {email, password}, {withCredentials: true})
            .then((respone) => {
                setMsg(respone.data.msg)
                setTimeout(() => {
                    if (respone.status == 201) window.location.replace("/profile")
                }, 2000)
            })

    }

    return(
        <div className="login">
            <h1> Logg inn </h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="email" onChange={(e) => setEmail(e.target.value)} ></input>
                <input type="text" placeholder="Password" onChange={(e) => setPassword(e.target.value)} ></input>
                <button type="submit"> Register </button>
            </form>
            {msg?<div><p>{msg}</p></div>:<div></div>}
        </div>
    )
}