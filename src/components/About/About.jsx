import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/about_profile.svg";

function About() {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>I am an aspiring frontend developer</p>
            <p>
              Beyond the code, I'm driven by a sense of purpose in my work. I
              believe that front-end development isn't just about pixels and
              lines of code—it's about making a meaningful impact on people's
              lives. Whether it's creating accessible interfaces for users with
              disabilities or designing intuitive experiences that simplify
              complex tasks, I'm inspired by the potential of technology to
              drive positive change and improve the human experience
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>JS</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "70%" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
