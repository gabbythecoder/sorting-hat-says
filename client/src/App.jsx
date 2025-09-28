import "./App.css";
import { Routes, Route } from "react-router";
import { useLocation } from "react-router";
import { useEffect } from "react";

import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Form from "./components/form/Form";
import Footer from "./components/footer/Footer";
import NotFoundPage from "./components/notfound/NotFoundPage";

export default function App() {
    const location = useLocation();

    useEffect(() => {
        document.body.className = "";

        if (location.pathname === "/") {
            document.body.classList.add("background-home-page");
        } else if (location.pathname === "/quiz") {
            document.body.classList.add("background-quiz-page");
        } else {
            document.body.classList.add("background-not-found-page");
        }
    }, [location.pathname]);

    return (
        <>
        <div className="flex flex-col min-h-screen">
            <Header />

        <main className="flex-1">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quiz" element={<Form />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
        </main>
            <Footer />
        </div>
        </>
    )
}