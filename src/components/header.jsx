import { useNavigate } from "react-router-dom";

const Header  = () => {

    const nav = useNavigate()
    
    
    return (
        <div className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <a href="#" className="navbar-brand">ToDo App</a>

                {localStorage.getItem("userData") && <ul className="navbar-nav">
                    <li className="nav-item">
                        <button type="button" className="btn btn-primary" onClick={()=>{
                             localStorage.clear()
                             console.log("logout")
                              nav("/login")
                        }} >Logout</button>
                    </li>
                </ul>}
            </div>
        </div>
    );
}

export default Header;