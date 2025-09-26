import { Link } from "react-router";

export default function Home() {
    return (
        <>
            <h1>Welcome</h1>

            <Link to={"form"}>Quiz</Link>
        </>
    )
}