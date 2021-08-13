import "./Signup.css"
import { useRef, useEffect } from "react"
import { Form, Button } from "react-bootstrap"
import { Link } from "react-router-dom"


export default function SignUp(){
    const email = useRef(null);
    const firstname = useRef(null);
    const lastname = useRef(null);
    const password = useRef(null);
    const username = useRef(null);
    const onSubmit = () => {
        console.log(email.current.value);
    }
    useEffect(() => {
        console.log("it worked")
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
                            <Form.Control type="email" size = "sm" placeholder="Email" isValid = {false} ref={email}/>
                            <div className = "controls"></div>
                            <Form.Control ref= {username} type="text" size = "sm" placeholder="Username"/>
                            <div className = "controls"></div>
                            <Form.Control ref = {firstname} type="text" size = "sm" placeholder = "First Name"></Form.Control>
                            <div className = "controls"></div>
                            <Form.Control ref={lastname} type="text" size = "sm" placeholder = "Last Name"></Form.Control>
                            <div className = "controls"></div>
                            <Form.Control ref={password} type="password" size = "sm" placeholder="Password" />
                            <div className = "controls"></div>
                            <Button variant="primary" type="submit" className="signup-button" size="sm">
                                Sign Up
                            </Button>
                        </Form>
                    </div>
                    <div className="signup-signin-option">
                        <span>Already a member? <Link to='/login'>Log In</Link></span>
                    </div>
                </div>
                
            </div>
        </>
    )
}