import React, { Component } from "react";
import "./Skills.css";
// Мы убрали импорт SoftwareSkill, так как выведем теги напрямую
import { skills } from "../../portfolio";
import { Fade } from "react-reveal";
import DataScienceImg from "./DataScienceImg";
import FullStackImg from "./FullStackImg";
import CloudInfraImg from "./CloudInfraImg";
import DesignImg from "./DesignImg";

function GetSkillSvg(props) {
  if (props.fileName === "DataScienceImg")
    return <DataScienceImg theme={props.theme} />;
  else if (props.fileName === "FullStackImg")
    return <FullStackImg theme={props.theme} />;
  else if (props.fileName === "CloudInfraImg")
    return <CloudInfraImg theme={props.theme} />;
  return <DesignImg theme={props.theme} />;
}

class SkillSection extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        {skills.data.map((skill, i) => {
          return (
            <div key={i} className="skills-main-div">
              <Fade left duration={2000}>
                <div className="skills-image-div">
                  <GetSkillSvg fileName={skill.fileName} theme={theme} />
                </div>
              </Fade>

              <div className="skills-text-div">
                <Fade right duration={1000}>
                  <h3 className="skills-heading" style={{ color: theme.text }}>
                    {skill.title}
                  </h3>
                </Fade>

                {/* Новый надежный вывод тегов с эмодзи напрямую */}
                <Fade right duration={1500}>
                  <div
                    className="software-skills-main-div"
                    style={{ marginBottom: "20px" }}
                  >
                    <ul
                      className="dev-icons"
                      style={{ padding: 0, listStyle: "none", margin: 0 }}
                    >
                      {skill.softwareSkills.map((tech, index) => {
                        return (
                          <li
                            key={index}
                            className="software-skill-inline"
                            style={{
                              display: "inline-block",
                              margin: "6px 8px",
                              padding: "8px 16px",
                              border: `1px solid ${
                                tech.style.color || "#E4A834"
                              }`,
                              borderRadius: "20px",
                              color: theme.text,
                              fontSize: "1rem",
                              fontWeight: "500",
                              backgroundColor: "transparent",
                            }}
                          >
                            {tech.skillName}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </Fade>

                <Fade right duration={2000}>
                  <div>
                    {skill.skills.map((skillSentence, i) => {
                      return (
                        <p
                          key={i}
                          className="subTitle skills-text"
                          style={{ color: theme.secondaryText }}
                        >
                          {skillSentence}
                        </p>
                      );
                    })}
                  </div>
                </Fade>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default SkillSection;
