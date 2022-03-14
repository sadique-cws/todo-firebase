import { Link } from "react-router-dom";

const header  = () => {
    return (
        <div className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <a href="#" className="navbar-brand">ToDo App</a>

                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/logout" className="nav-link">Logout</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default header;