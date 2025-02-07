import "../css/components/Navbar.css"


export default function Navbar() {
    return(
        <div>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="/Login">Login</a></li>
                    <li><a href="/Register">Register</a></li>
                    <li><a href="#">About</a></li>
                </ul>
            </nav>
        </div>
    )
}