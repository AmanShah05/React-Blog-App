import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./TopBar.css"

export default function TopBar() {
    const { user, dispatch } = useContext(Context);
    const PF = "http://localhost:5000/images/"

    
    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
      };
    return (
        <div className="top">
            <div className="topLeft">
                <a href="https://www.linkedin.com/in/askaman/" target="_blank" rel="noreferrer noopener"><i className="topIcon fab fa-linkedin"></i></a> 
                <a href="https://github.com/AmanShah05" target="_blank" rel="noreferrer noopener"><i className="topIcon fab fa-github-square"></i></a> 
                <a href="https://www.amanshah.tech/" target="_blank" rel="noreferrer noopener"><i className="topIcon fas fa-link"></i></a> 

            </div> 
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem"><Link className="link" to="/" >HOME</Link></li>   
                    <li className="topListItem"><Link className="link" to="/about" >ABOUT</Link></li>   
                    <li className="topListItem"><Link className="link" to="/contact" >CONTACT</Link></li>   
                    <li className="topListItem"><Link className="link" to="/write" >WRITE</Link></li>   
                    <li className="topListItem" onClick={handleLogout}>{user && "LOGOUT"}</li>  
                </ul>    
            </div> 
            
            <div className="topRight">
                
                {user ? (
                    <Link to="/settings">
                        <img className="topImg" src={PF+user.profile} alt="" /> 
                    </Link>
                ) : (
                    <ul className="topList">
                        <li className="topListItem">
                            <Link className="link" to="/login" >LOGIN</Link>
                        </li>
                        <li className="topListItem">
                            <Link className="link" to="/register" >REGISTER</Link>
                        </li>
                    </ul>
                )}
                
                <i className="topSearchIcon fas fa-search"></i>
            </div> 
        </div>
    )
}
