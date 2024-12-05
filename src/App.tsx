import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary";
import { Provider } from "react-redux";

import { ErrorBoundary } from "./ErrorBoundary";
import { store } from "./store/store";
import "./styles/global.scss";

const HomePage = lazy(() => import("./pages/home/Home"));
const AboutPage = lazy(() => import("./pages/about/About"));

function App() {
    return (
        <Provider store={store}>
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
        </Provider>
    );
}

export default App;
