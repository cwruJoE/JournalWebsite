import React from 'react';
import './App.css';
import Navbar from "./Component/NavBar";
import HomePage from "./Page/HomePage";
import ArticlesPage from "./Page/ArticlesPage";
import WorkingPapersPage from "./Page/WorkingPaperPage";
import AboutUsPage from "./Page/AboutUsPage";
import GraphsPage from "./Page/GraphPage";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import ArticlePage from './Page/ArticlePage';


function App() {
  return (
  <Router>
    <Navbar />
    {/* Routes */}
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/articles" element={<ArticlesPage />} />
      <Route path="/articles/:id" element={<ArticlePage />} /> 
      <Route path="/working-papers" element={<WorkingPapersPage />} />
      <Route path="/about-us" element={<AboutUsPage />} />
      <Route path="/graphs" element={<GraphsPage />} />
    </Routes>
  </Router>
  );
}

export default App;
