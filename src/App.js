import './App.css';
import ProjectCard from './components/project-card/project-card.component';

import DonkeyKongImage from "./assets/level_2.png"

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/home.page';
import AboutMePage from './pages/about_me.page';
import ProjectsPage from './pages/projects.page';
import Navigationbar from './pages/navigation_bar.page';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigationbar />
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/about_me' element={<AboutMePage />}></Route>
          <Route path='/projects' element={<ProjectsPage />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
