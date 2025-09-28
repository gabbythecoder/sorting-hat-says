import { useState, useEffect } from "react";
import "./RecentlySortedUsers.css";

export default function RecentlySortedUsers() {
    const [quizResult, setQuizResult] = useState([]);

    //house badge images for the recently sorted users
    const houseBadge = {
        gryffindor: "/images/gryffindor-badge.png",
        slytherin: "/images/slytherin-badge.png",
        hufflepuff: "/images/hufflepuff-badge.png",
        ravenclaw: "/images/ravenclaw-badge.png"
    };

    useEffect(() => {
        async function getQuizResultData() {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/quiz-result`);
                const data = await response.json();
                setQuizResult(data);
            } catch (error) {
                console.error("Failed to fetch API", error);
            }
        } 
        getQuizResultData();

        const quizResultInterval = setInterval(getQuizResultData, 3000);
        return () => clearInterval(quizResultInterval);
    }, []);

    return (
        <>
            <div className="sorted-users-container">
                <h3 className="sorted-users-title">Recently Sorted Students</h3>
                <div className="user-cards-container">
                    {quizResult.map((user, index) => (
                        <div className={`user-cards ${user.sorting_house}`} key={`${user.user_name}-${index}`}>
                            <div className="user-cards-crest">
                                <img 
                                    src={houseBadge[user.sorting_house.toLowerCase()]}
                                    alt={`${user.sorting_house} crest`}
                                />
                            </div>

                            <div className="user-cards-info">
                                <p className="user-cards-name">{user.user_name}</p>
                                <p className="user-cards-house">{user.sorting_house.charAt(0).toUpperCase() + user.sorting_house.slice(1)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}