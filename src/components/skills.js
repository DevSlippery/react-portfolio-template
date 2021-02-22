import React from "react"
import data from "../yourdata"

const Skills = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="skills-container">
          <h1>Skills</h1>
          <h6>Java Skills</h6>
          <div className="skills-grid-2">
            {data.skillsJava.map(skill => (
              <div className="skill" key={skill.id}>
                <img src={skill.img} alt="css"></img>
                <p>{skill.para}</p>
              </div>
            ))}
          </div>
          <h6>Javascript Skills</h6>
          <div className="skills-grid-4">
            {data.skillsJavascript.map(skill => (
              <div className="skill" key={skill.id}>
                <img src={skill.img} alt="css"></img>
                <p>{skill.para}</p>
              </div>
            ))}
          </div>
          <h6>PHP Skills</h6>
          <div className="skills-grid">
            {data.skillsPHP.map(skill => (
              <div className="skill" key={skill.id}>
                <img src={skill.img} alt="css"></img>
                <p>{skill.para}</p>
              </div>
            ))}
          </div>
          <h6>Python Skills</h6>
          <div className="skills-grid">
            {data.skillsPython.map(skill => (
              <div className="skill" key={skill.id}>
                <img src={skill.img} alt="css"></img>
                <p>{skill.para}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Skills
