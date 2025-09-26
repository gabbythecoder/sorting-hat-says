import "./App.css";
import { Routes, Route } from "react-router";

import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Form from "./components/form/Form";
import Footer from "./components/footer/Footer";

export default function App() {
    return (
        <>
        <div className="flex flex-col min-h-screen">
            <Header />

        <main className="flex-1">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/form" element={<Form />} />
        
        </Routes>
        </main>
            <Footer />
        </div>
        </>
    )
}