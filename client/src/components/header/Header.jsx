import { Link } from "react-router";
import "./Header.css";

export default function Header() {
    return (
        <header className="site-header" tabIndex="0">
            <div className="header-container">
            <h1 className="header-title">Sorting Hat Says</h1>

            <nav className="nav-bar">
                <Link className="link" to={"/"}>Home</Link>
                <Link className="link" to={"/form"}>Quiz</Link>
            </nav>
            </div>
        </header>
    )
}