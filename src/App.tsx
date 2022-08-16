import React from 'react';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import 'normalize.css';
import AdsPage from "./components/AdsPage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<AdsPage/>}/>

            </Routes>
        </Router>
    );
}

export default App;
