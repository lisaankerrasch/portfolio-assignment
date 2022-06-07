import sp2 from "../../images/sp2.jpg";
import jsfca from "../../images/jsfca.jpg";
import pe2 from "../../images/pe2.jpg";
import { NavLink } from "react-router-dom";

export default function Projects() {
  return (
    <div className="dark">
      <style>{"body { background-color: #77544a; }"}</style>
      <div className="container">
        <div className="projects__flex">
          <div className="projects__flex--item">
            <div className="projects__image">
              <img
                id="firstImg"
                className="projects__image--img"
                src={sp2}
                alt="screenshot of semester project website"
              ></img>
            </div>
            <hr></hr>
            <div className="projects__content">
              <div className="projects__number">1</div>
              <div className="projects__text">
                <h5>Semester Project 2</h5>
                <p>
                  Fashion Boutique website with accessories. Strapi API deployed
                  via Heroku. Login and cart functionality.{" "}
                </p>
                <a
                  className="link"
                  href="https://github.com/lisaankerrasch/semesterproject2"
                >
                  Link to repo
                </a>
              </div>
            </div>
            <hr></hr>
            <hr></hr>
          </div>
          <div className="projects__flex--item">
            <div className="projects__image">
              <img
                className="projects__image--img"
                src={jsfca}
                alt="screenshot of semester project website"
              ></img>
            </div>
            <hr></hr>
            <div className="projects__content">
              <div className="projects__number">2</div>
              <div className="projects__text">
                <h5>js frameworks CA</h5>
                <p>Created with React.js. Public API with make-up products.</p>
                <a
                  className="link"
                  href="https://github.com/Noroff-FEU-Assignments/js-frameworks-course-assignment-lisaankerrasch"
                >
                  Link to repo
                </a>
              </div>
            </div>
            <hr></hr>
            <hr></hr>
          </div>
          <div className="projects__flex--item">
            <div className="projects__image">
              <img
                className="projects__image--img"
                src={pe2}
                alt="screenshot of semester project website"
              ></img>
            </div>
            <hr></hr>
            <div className="projects__content">
              <div className="projects__number">3</div>
              <div className="projects__text">
                <h5>Project exam 2</h5>
                <p>
                  Hotel/Accommodation booking site for Bergen. Created with
                  React.js. Login functionality.
                </p>
                <a
                  className="link"
                  href="https://github.com/Noroff-FEU-Assignments/project-exam-2-lisaankerrasch"
                >
                  Link to repo
                </a>
              </div>
            </div>
            <hr></hr>
            <hr></hr>
          </div>
        </div>
        <NavLink to="/">
          <button className="backtohome">Back to home</button>
        </NavLink>
      </div>
    </div>
  );
}
