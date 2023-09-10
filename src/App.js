import React from "react";
import SearchResult from "./components/SearchResult.js";
import SearchPage from "./components/SearchPage.js";
import SearchDetail from './components/SearchDetail.js';

import './style.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
    return(
    <>
    <BrowserRouter>
            <Routes>
                    <Route path="/" element={<SearchPage />} exact/>
                    <Route path="/items" element={<SearchResult />} />  
                    <Route path="/items/:id" element={<SearchDetail />} />
            </Routes></BrowserRouter>
    </>
    );
            
};

export default App;