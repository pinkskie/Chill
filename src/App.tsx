import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary";

import { ErrorBoundary } from "./ErrorBoundary";
import "./styles/global.scss";

const HomePage = lazy(() => import("./pages/Home"));
const AboutPage = lazy(() => import("./pages/About"));

function App() {
    return (
        <ReactErrorBoundary fallbackRender={ErrorBoundary}>
            <BrowserRouter>
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </ReactErrorBoundary>
    );
}

export default App;
