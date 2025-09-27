import { Link } from "react-router";
import "./Home.css";

export default function Home() {
    return (
        <>
            <div className="home-page-container">
                <h2 className="home-page-title">SORTING HAT SAYS</h2>
                    <button className="quiz-button">
                        <Link to={"quiz"}>TAKE THE QUIZ</Link>
                    </button>
            </div>
        </>
    )
}