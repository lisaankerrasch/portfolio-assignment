import { NavLink } from "react-router-dom";
import hands from "../../images/hands.jpg";
import instagram from "../../icons/instagram.svg";
import email from "../../icons/email.svg";

export default function Index() {
  return (
    <div className="container">
      <div className="index__flex">
        <div className="index__flex--1">
          <div className="index__flex--1--1">
            <h4>x</h4>
            <h1>itoh</h1>
          </div>
          <h2>Front-end developer & Designer</h2>
        </div>
        <div className="index__flex--2">
          <img className="image" src={hands} alt="hands"></img>
          <NavLink to="/projects">
            <div className="circle">
              <h3>Projects</h3>
            </div>
          </NavLink>
        </div>
        <div className="index__flex--3">
          <img className="icon" src={email} alt="email link"></img>
          <img className="icon" src={instagram} alt="instagram link"></img>
        </div>
      </div>
    </div>
  );
}
