import "bulma/css/bulma.css";
import "./App.css";
import Course from "./Components/Course";
import ReaCt from "./images/react.jpg";
import Si from "./images/c.jpg";
import Boots from "./images/bootstrap.jpg";
import Develop from "./images/development.jpg";

function App() {
  return (
    <div className="App">
      <section className="hero is-link">
        <div className="hero-body">
          <p className="title">Kurslarım</p>
        </div>
      </section>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column">
              <Course
                image={ReaCt}
                title="React"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque odio nihil incidunt ea? Voluptatibus neque aliquid quos eaque! Delectus, vero."
              />
            </div>
            <div className="column">
              <Course
                image={Boots}
                title="Bootstrap"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque odio nihil incidunt ea? Voluptatibus neque aliquid quos eaque! Delectus, vero."
              />
            </div>
            <div className="column">
              <Course
                image={Develop}
                title="Web"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque odio nihil incidunt ea? Voluptatibus neque aliquid quos eaque! Delectus, vero."
              />
            </div>
            <div className="column">
              <Course
                image={Si}
                title="C++"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque odio nihil incidunt ea? Voluptatibus neque aliquid quos eaque! Delectus, vero."
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
