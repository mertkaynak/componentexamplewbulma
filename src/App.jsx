import "bulma/css/bulma.css";
import "./App.css";
import Course from "./Component/Course.jsx";
import React from "./images/React.png";
import Test from "./Component/test.jsx";

function App() {
  return (
    <div className="App">
      <section className="hero is-link">
        <div className="hero-body">
          <p className="title">Kurslarım</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column">
              <Test image={React} title="Vue" description="Lorem ipsum dol" />
              {/* <Course
                image={React}
                title="Angular"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore rerum laboriosam nulla, fugit ea id illo laborum aliquam veniam voluptatibus numquam tenetur! Accusantium suscipit culpa veritatis ea laborum iste omnis."
              /> */}
            </div>
            <div className="column">
              {/* <Course
                image={React}
                title="Vue"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore rerum laboriosam nulla, fugit ea id illo laborum aliquam veniam voluptatibus numquam tenetur! Accusantium suscipit culpa veritatis ea laborum iste omnis."
              /> */}
            </div>
            <div className="column">
              {/* <Course
                image={React}
                title="React"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore rerum laboriosam nulla, fugit ea id illo laborum aliquam veniam voluptatibus numquam tenetur! Accusantium suscipit culpa veritatis ea laborum iste omnis."
              /> */}
            </div>
            <div className="column">
              {/* <Course
                image={React}
                title="Nuxt"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore rerum laboriosam nulla, fugit ea id illo laborum aliquam veniam voluptatibus numquam tenetur! Accusantium suscipit culpa veritatis ea laborum iste omnis."
              /> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
