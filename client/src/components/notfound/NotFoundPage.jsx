import { Link } from "react-router";
import "./NotFoundPage.css";

export default function NotFoundPage() {
    return (
        <div className="flex items-center justify-center min-h-[85vh] px-4">

        <div className="not-found-container">
            <h1 className="not-found-title">404 - LOST IN THE FORBIDDEN FOREST</h1>
            <p className="not-found-text">It looks like this page has been hidden by a Disillusionment Charm... or maybe a mischievous house-elf.</p>
            <p className="not-found-text">Don't worry, even Harry got lost at Hogwarts sometimes.</p>

            <button className="return-home-button">
                <Link to={"/"}>🪄 Return to the Great Hall</Link>
            </button>
        </div>

        </div>
    )
}