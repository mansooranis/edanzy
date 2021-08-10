import "./Signup.css"
import { useRef, useEffect , useState} from "react"
import { Form, Button } from "react-bootstrap"
export default function SignUp(){
    const [email,setEmail] = useState("")
    const [firstname , setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [username , setUsername] = useState("")
    const [password , setPassword] = useState("")
    
    const onSubmit = (e) => {
        e.preventDefalut();
        if(email && password && firstname && lastname && username){
            
        };
    }
    useEffect(() => {
        
    })
    return(
        <>
            <div className="main-class-signup">
                <div className="signup-page">
                    <div className="signup-container">
                        <h2 className="org-title-signup">Edanzy</h2>
                        <h6 style = {{fontFamily:"Lato"}}><i>A step closer to success</i></h6>
                        <hr/>
                        <Form className="signup-form-group" onSubmit = {onSubmit}>   
                            <Form.Control type="email" value = {email} onChange={(e) => setEmail(e.target.value)} size = "sm" placeholder="Email" isValid = {false}  required/>
                            <div className = "controls"></div>
                            <Form.Control value={username} onChange = {(e) => setUsername(e.target.value)} type="text" size = "sm" placeholder="Username" required/>
                            <div className = "controls"></div>
                            <Form.Control value = {firstname} onChange = {(e) => setFirstname(e.target.value)} type="text" size = "sm" placeholder = "First Name" required/>
                            <div className = "controls"></div>
                            <Form.Control value = {lastname} onChange = {(e) => setLastname(e.target.value)} type="text" size = "sm" placeholder = "Last Name" required/>
                            <div className = "controls"></div>
                            <Form.Control value={password} onChange = {(e) => setPassword(e.target.value)} type="password" size = "sm" placeholder="Password" required />
                            <div className = "controls"></div>
                            <Button variant="primary" type="submit" className="signup-button" size="sm" >
                                Sign Up
                            </Button>
                        </Form>
                    </div>
                    <div className="signup-signin-option">
                        <span>Already a member? Log In</span>
                    </div>
                </div>
                
            </div>
        </>
    )
}