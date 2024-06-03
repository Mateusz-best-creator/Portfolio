import logo from './logo.svg';
import './App.css';
import ProjectCard from './components/project-card/project-card.component';

import DonkeyKongImage from "./assets/level_2.png"

function App() {
  return (
    <div className="App">
      <ProjectCard imageUrl={DonkeyKongImage} title={"Donkey Kong"} description={"Welcome to the C++ Crafted Donkey Kong Game – an exciting and nostalgic gaming experience! This project brings the classic Donkey Kong arcade game to life, meticulously crafted in C++ to capture the essence of the original while adding modern features."} iconsUrls={[DonkeyKongImage]} />
    </div>
  );
}

export default App;
