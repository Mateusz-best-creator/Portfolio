import "./projects-scrolling.styles.css"
import ProjectScrolling from "../project-scrolling/project-scrolling.component";

import C from "../../assets/c++.png"
import SDL from "../../assets/SDL.png"
import PYTHON from "../../assets/python.png"
import CMAKE from "../../assets/CMake.png"
import TENSORFLOW from "../../assets/tensorflow.png"
import SCIKIT_LEARN from "../../assets/scikit-learn.png"
import BASH from "../../assets/bash.png"
import LINUX from "../../assets/linux.png"
import PYGAME from "../../assets/pygame.png"
import JAVA from "../../assets/java.png"

function ProjectsScrolling() {
    return (
        <div className="scrolling-projects">
            <div className="project-main-container">
                <div className="media-scroller snaps-inline">
                    <ProjectScrolling title={"Chess"} description={"C++ crafted chess game"} technologies={[C, SDL]} />
                    <ProjectScrolling title={"DogBreeds"} description={"C++ crafted chess game"} technologies={[PYTHON, TENSORFLOW, SCIKIT_LEARN]} />
                    <ProjectScrolling title={"DogBreeds"} description={"C++ crafted chess game"} technologies={[BASH, LINUX]} />
                    <ProjectScrolling title={"GameOfLife"} description={"C++ crafted chess game"} technologies={[PYTHON, PYGAME]} />
                    <ProjectScrolling title={"GameOfLife"} description={"C++ crafted chess game"} technologies={[C, CMAKE, SDL]} />
                    <ProjectScrolling title={"GameOfLife"} description={"C++ crafted chess game"} technologies={[JAVA]} />
                    {/* <ProjectScrolling />
                    <ProjectScrolling />
                    <ProjectScrolling />
                    <ProjectScrolling /> */}
                </div>
            </div>
        </div >
    )
}

export default ProjectsScrolling;