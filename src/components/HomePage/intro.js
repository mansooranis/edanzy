import { Button } from "react-bootstrap"
import "./intro.css"
export default function Intro(){
    return(
        <div className = "main-container">
            <div className="heading-tag">
                <p>
                    <text><i><b>Your free learning tool!!</b></i></text>
                    <br/><br className="br-class"/>
                    <Button className="button-getstarted">Get Started</Button>
                </p>
            </div>
            <div className = "image-class">
                <img src={require("../../svgs/ed.svg").default} className="image-class1"/>
                
            </div>
            
        </div>
    )
}