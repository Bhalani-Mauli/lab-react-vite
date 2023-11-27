import "./style.css";
import logo from "../../assets/ironhack-logo-xs.png";
import menuLogo from "../../assets/menu-top-xs.png";
export default function LandingPage() {
  return (
    <>
      <div className="div-wrapper">
        <div className="img-wrapper">
          <img src={logo} alt="ironhack-logo" />
          <img src={menuLogo} alt="menu-top" />
        </div>
        <div className="landing-text">
          <h1>Say hello to ReactJS</h1>
          <p>You will learn how to use</p>
          <p>the most popular fronted library,</p>
          <p>and become a super Ninja Developer</p>
          <button className="landing-btn">Awesome!</button>
        </div>
      </div>
    </>
  );
}
