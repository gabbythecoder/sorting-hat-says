import houseDescriptions from "../../lib/houseDescriptions";
import "./Result.css";

export default function Result({ house }) {
    const info = house ? houseDescriptions[house.toLowerCase()] : undefined;

    return (
        <>
        {info ? ( 
            <div className="result-container">
                <h2>You're in {info.name}!</h2>
                <p>Traits: {info.traits}</p>
                <p>{info.description}</p>
            </div>
            ) : (
                <p>Oops! We couldn't determine your house.</p>
            )}
        </>
    )
}