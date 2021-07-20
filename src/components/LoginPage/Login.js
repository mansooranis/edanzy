import "./Login.css"
import { Link } from "react-router-dom"
export default function Login(){
    return(
        <div>
            <h1>This is login page</h1>
            <Link to="/">home</Link>
        </div>
    )
}