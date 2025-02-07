import "../css/components/Login.css"
import {useState} from "react"
import axios from "axios";



export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [msg, setMsg] = useState("")


    function handleSubmit(e) {
        e.preventDefault()
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/auth/createUser`,
        {email, password, repeatPassword}, {withCredentials: true})
        .then((respone) => {
            setMsg(respone.data.msg)
            if (respone.status == 201) window.location.replace("/profile")

        })
        console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
        
    }

    return(
        <div className="form">
            <form onSubmit={(handleSubmit)}>
                <input type="email" placeholder="email" onChange={(e) => setEmail(e.target.value)}></input>
                <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}></input>
                <input type="password" placeholder="repeatPassword" onChange={(e) => setRepeatPassword(e.target.value)}></input>
                <button type="submit"> Register </button>
            </form>
            {msg?<div><p>{msg}</p></div>:<div></div>}
        </div>
    )
}