import "./App.css";
import { Routes, Route } from "react-router";

import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Form from "./components/form/Form";
import Footer from "./components/footer/Footer";

export default function App() {
    return (
        <>
            <Header />

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/form" element={<Form />} />
        
        </Routes>

            <Footer />
        </>
    )
}