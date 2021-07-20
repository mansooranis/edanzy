import NavBarMain from "../components/NavBar/NavBar"
import "./Signup.css"
export default function SignUp(){
    return(
        <>
            <NavBarMain/>
            <div className="flex-container">
                <div className="signup-container">
                    <h3 align = "center" className="page-title">Sign Up!</h3>
                </div>
                <div className = "image-class2">
                    <img src={require("../images/signup.jpg").default} className="image-class1" alt = "signup image"/>  
                </div>
            </div>
        </>
    )
}