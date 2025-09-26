import houseDescriptions from "../../lib/houseDescriptions";
import "./Result.css";

export default function Result({ house, onRetake }) {
    const info = house ? houseDescriptions[house.toLowerCase()] : undefined;

    return (
        <>
        {info ? ( 
            <div className="result-container">
                <h2>You're in {info.name}!</h2>
                <p>Traits: {info.traits}</p>
                <p>{info.description}</p>

                <button onClick={onRetake} className="retake-button">Retake Quiz</button>
            </div>
            ) : (
                <p>Oops! We couldn't determine your house.</p>
            )}
        </>
    )
}