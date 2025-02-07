import "./skills.css";
import Frontend from "./Frontend";
import Backend from "./Backend";
import Databases from "./Databases";
import DevOps from "./DevOps";

const Skills = () => {
  return (
    <div className="skills_section container grid">
      <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My technical level</span>

        <div className="skills__container container grid">
          <Frontend />
          <Backend />
          <Databases />
          <DevOps />
        </div>
      </section>
      {/* <ScrollDown location="#qualification" /> */}
    </div>
  );
};

export default Skills;
