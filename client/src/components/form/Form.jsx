import quizQuestions from "../../lib/quizQuestions";
import { useState } from "react";
import "./Form.css";
import Result from "../result/Result";
import RecentlySortedUsers from "../recentlysortedusers/RecentlySortedUsers";

export default function Form() {
    const [username, setUsername] = useState("");
    const [answers, setAnswers] = useState({});
    const [result, setResults] = useState(null);

    function handleAnswerChange(event) {
        setAnswers({ ...answers, [event.target.name]: event.target.value });
    };

    function getTopHouse(tally) {
        const entries = Object.entries(tally);
        const sortedEntries = entries.sort((a, b) => b[1] - a[1]);
        const topHouseEntry = sortedEntries[0];
        return topHouseEntry[0];
    };

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            //POST to add user
            await fetch("http://localhost:8080/add-user", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ user_name: username }),
            });

            //GET the user to get the ID
            const userResponse = await fetch(`http://localhost:8080/users/${username}`);
            const userData = await userResponse.json();
            const user_id = userData[0].id;

            //testing 
            // console.log(user_id);

            //calculate the house score
            const tally = {
                gryffindor: 0,
                slytherin: 0,
                hufflepuff: 0,
                ravenclaw: 0
            };

            Object.values(answers).forEach((house) => {
                if (tally[house] !== undefined) {
                    tally[house]++;
                };
            });

            const sorting_house = getTopHouse(tally);

            //POST quiz result
            await fetch("http://localhost:8080/add-quiz-result", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ sorting_house, user_id }),
            });

            setResults(sorting_house);
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Your name:
                    <input 
                        type="text"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                        required
                    />
                </label>

                {quizQuestions.map((question, index) => (
                    <div key={question.id}>
                        <p>{question.question}</p>

                        {question.options.map((option, optionIndex) => (
                            <label key={optionIndex}>
                                <input 
                                    type="radio"
                                    name={`question-${index}`}
                                    value={option.value}
                                    checked={answers[`question-${index}`] === option.value}
                                    onChange={handleAnswerChange}
                                    required
                                />
                                {option.text}
                            </label> 
                        ))}
                    </div>
                ))}

                <button type="submit">Submit</button>
            </form>

            {result && <Result house={result}/>}

            <RecentlySortedUsers />

        </div>
    )
}