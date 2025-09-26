import { useState, useEffect } from "react";
import "./RecentlySortedUsers.css";

export default function RecentlySortedUsers() {
    const [quizResult, setQuizResult] = useState([]);

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
                <h3 className="sorted-users-title">Recently Sorted Users</h3>
                <div className="user-cards-container">
                    {quizResult.map((user, index) => (
                        <div className={`user-cards ${user.sorting_house}`} key={`${user.user_name}-${index}`}>
                            <p className="user-cards-name">{user.user_name}</p>
                            <p>{user.sorting_house.charAt(0).toUpperCase() + user.sorting_house.slice(1)}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}