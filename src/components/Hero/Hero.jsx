import "./Hero.css";
import profile_img from "../../assets/profile_img.svg";

function Hero() {
  return (
    <div className="hero">
      <img src={profile_img} alt="" />
      <h1>
        <span>I'm Manojkumar</span>,Fontend developer
      </h1>
      <p>
        with a passion for crafting beautiful and intuitive user interfaces.I'm
        eager to learn and excited to make my mark in this dynamic field.
      </p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
}

export default Hero;
