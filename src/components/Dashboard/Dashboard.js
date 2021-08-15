import Sidebar from "../Sidebar/Sidebar";
import "./Dashboard.css"
export default function Dashboard(){
    return(
        <div>
            <Sidebar/>
            <div className="main-dashboard">
                <div>
                    Looks like your dashboard is empty
                </div>
                
            </div>
        </div>
    )
}