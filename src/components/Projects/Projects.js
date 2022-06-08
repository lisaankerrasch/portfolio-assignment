import { NavLink } from "react-router-dom";
import Image1 from "../images/Image1";
import Image2 from "../images/Image2";
import Image3 from "../images/Image3";

export default function Projects() {
  return (
    <div className="dark">
      <style>{"body { background-color: #77544a; }"}</style>
      <div className="container">
        <div className="projects__flex">
          <div className="projects__flex--item">
            <div className="projects__image">
              <Image1 />
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
              <Image2 />
            </div>
            <hr></hr>
            <div className="projects__content">
              <div className="projects__number">2</div>
              <div className="projects__text">
                <h5>JS frameworks CA</h5>
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
              <Image3 />
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
