import { BrowserRouter, Route, Routes } from "react-router-dom";

import { lazy, Suspense } from "react";

const HomePage = lazy(() => import("./pages/Home"));
const AboutPage = lazy(() => import("./pages/About"));

import "./styles/global.scss";

function App() {
    return (
        <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}

export default App;
