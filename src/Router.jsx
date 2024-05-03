import { Routes, Route } from "react-router-dom";

import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Dashboard } from "./pages/Dashboard";

export const Router = () => {
    return (
        <>
            <Header />
            <Routes >
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </>

    );
};