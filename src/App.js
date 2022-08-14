import React, { useState, useEffect } from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer";

import Translations from "./components/Translations/Translations";
import DragonheartGuideTranslation from "./components/Translations/Specific/DragonheartGuideTranslation";

import Articles from "./components/Articles/Articles";
import GazzaniggaArticle from "./components/Articles/Specific/GazzaniggaArticle";
import DrawingArticle from "./components/Articles/Specific/DrawingArticle";
import {DisintegrationArticle} from "./components/Articles/Specific/DisintegrationArticle";

import Blog from "./components/Blog/Blog";
import StockholmTripRecord from "./components/Blog/Specific/StockholmTrip";

import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {NeuronsGoneWildArticle} from "./components/Translations/Specific/NeuronsGoneWildArticle";

function App() {
    const [load, updateLoad] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            updateLoad(false);
        }, 1200);

        return () => clearTimeout(timer);
    }, []);

    return (
        <Router>
            <Preloader load={load} />
            <div className="App" id={load ? "no-scroll" : "scroll"}>
                <Navbar />
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<Home />} />

                    {/* TRANSLATIONS */}
                    <Route path="/translations" element={<Translations />} />
                    <Route path="/tulpamancy-guide-into-the-strange-and-wonderful" element={<DragonheartGuideTranslation />} />
                    <Route path="/neurons-gone-wild" element={<NeuronsGoneWildArticle />} />

                    {/* ARTICLES */}
                    <Route path="/articles" element={<Articles />} />
                    <Route path="/consciousness-by-gazzaniga" element={<GazzaniggaArticle />} />
                    <Route path="/drawing-and-visual" element={<DrawingArticle />} />
                    <Route path="/disintegration" element={<DisintegrationArticle />} />

                    {/* BLOG */}
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/stockholm-trip" element={<StockholmTripRecord />} />

                    <Route path="*" element={<Navigate to="/"/>} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;