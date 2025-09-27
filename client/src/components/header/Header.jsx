import { NavLink } from "react-router";
import "./Header.css";

export default function Header() {
    return (
        <header className="site-header" tabIndex="0">
            <div className="header-container">
            <h1 className="header-title">SORTING HAT SAYS</h1>

            <nav className="nav-bar">
                <NavLink className={({ isActive }) => isActive ? "link active" : "link"} to={"/"}>HOME</NavLink>
                <NavLink className={({ isActive }) => isActive ? "link active" : "link"} to={"/quiz"}>QUIZ</NavLink>
            </nav>
            </div>
        </header>
    )
}