import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import "./intro.css"
export default function Intro(){
    return(
        <div className = "main-container">
            <div className="heading-tag">
                <p>
                    <text><i><b>Your free learning tool!!</b></i></text>
                    <br/><br className="br-class"/>
                    <Link to="/signup">
                        <Button className="button-getstarted">Get Started</Button>
                    </Link>
                </p>
            </div>
            <div className = "image-class">
                <img src={require("../../svgs/ed.svg").default} className="image-class1" alt = "learning image"/>
                
            </div>
            
        </div>
    )
}