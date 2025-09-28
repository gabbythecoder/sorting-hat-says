import houseDescriptions from "../../lib/houseDescriptions";
import "./Result.css";

export default function Result({ house, onRetake }) {
    const info = house ? houseDescriptions[house.toLowerCase()] : undefined;
    
    const houseImages = {
        gryffindor: "/images/gryffindor.png",
        slytherin: "/images/slytherin.png",
        hufflepuff: "/images/hufflepuff.png",
        ravenclaw: "/images/ravenclaw.png"
    };

    const houseImageCrest = house ? houseImages[house.toLowerCase()] : null;

    return (
        <>
        {info ? ( 
            <div className="result-container">
                {houseImageCrest && (
                    <img 
                        src={houseImageCrest}
                        alt={info.name}
                        className="house-image"
                    />
                )}

                <div className="result-text-container">
                <h2 className="result-congrats">Congratulations! You're in {info.name}!</h2>
                <p className="result-text">Traits: {info.traits}</p>
                <p className="result-text">{info.description}</p>
                </div>
            </div>
            ) : (
                <p>Oops! We couldn't determine your house.</p>
            )}

            <button onClick={onRetake} className="retake-button">Retake Quiz</button>
        </>
    )
}