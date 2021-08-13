import "./Login.css"
import { Link } from "react-router-dom"
import { useRef, useEffect } from "react"
import { Form, Button } from "react-bootstrap"


export default function Login(){
    const email = useRef(null);
    const password = useRef(null);
    
    const onSubmit = () => {
        console.log(email.current.value);
    }
    useEffect(() => {
        console.log("it worked")
    })
    return(
        <>
            <div className="main-class-login">
                <div className="login-page">
                    <div className="login-container">
                        <h2 className="org-title-login">Edanzy</h2>
                        <h6 style = {{fontFamily:"Lato"}}><i>A step closer to success</i></h6>
                        <hr/>
                        <Form className="login-form-group" onSubmit = {onSubmit}>   
                            <Form.Control type="email" size = "sm" placeholder="Email" isValid = {false} ref={email}/>
                            <div className = "controls"></div>
                            
                            <Form.Control ref={password} type="password" size = "sm" placeholder="Password" />
                            <div className = "controls"></div>
                            <Button variant="primary" type="submit" className="login-button" size="sm">
                                Log in
                            </Button>
                        </Form>
                    </div>
                    <div className="login-signup-option">
                        <span>Don't have an account? <Link to='/signup'>Sign up</Link></span>
                    </div>
                </div>
                
            </div>
        </>
    )
}