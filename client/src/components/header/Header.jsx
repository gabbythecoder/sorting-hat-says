import { Link } from "react-router";
import "./Header.css";

export default function Header() {
    return (
        <header>
            <div className="header-container">
            <h1>Sorting Hat Says</h1>

            <nav>
                <Link to={"/"}>Home</Link>
                <Link to={"/form"}>Quiz</Link>
            </nav>
            </div>
        </header>
    )
}