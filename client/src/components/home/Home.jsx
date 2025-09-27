import { Link } from "react-router";
import "./Home.css";

export default function Home() {
    return (
        <>
            <div className="home-page-container">
                <h2 className="home-page-title">SORTING HAT SAYS</h2>
                <p className="home-page-intro">Welcome to Sorting Hat Says! Take our magical personality quiz to discover which Hogwarts house you belong to. Click the button below to answer a few fun questions and see where the Sorting Hat places you!</p>
                    <button className="quiz-button">
                        <Link to={"quiz"}>TAKE THE QUIZ</Link>
                    </button>
            </div>
        </>
    )
}