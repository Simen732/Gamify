import { useContext } from "react"
import { AuthContext } from "../auth/AuthContext"

export default function() {
    const {user} = useContext(AuthContext)
    console.log(user.email)
    if(!user.email) window.location.replace("/login")
    
    return(
        <div>
            <h1>Welcome to the profilererer page mister, "USER EMAIL"</h1>
        </div>
    )
}