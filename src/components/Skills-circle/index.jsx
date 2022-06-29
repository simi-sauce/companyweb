import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const SkillsCircle = ({ subBG, theme }) => {
  const cpStyle = {
    path: {
      stroke: "#F26522",
    },
    trail: {
      stroke: theme ? (theme == "dark" ? "#0f1218" : "#e5e5e5") : "",
    },
    text: {
      fill: theme ? (theme == "dark" ? "#ffffff" : "#4e4e4e") : "",
      fontSize: "16px",
    },
  };
  return (
    <section
      className={`bac skills-circle pt-20 pb-20 ${
        subBG ? "sub-bg" : ""
      }`}
    >
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="">
              <div className="row">
                <div className="col-md-6">
                  <div className="item wow fadeInLeft" data-wow-delay=".6">
                    <div className="skill">
                      <CircularProgressbar
                        value={95}
                        strokeWidth={2}
                        text={`${95}%`}
                        styles={cpStyle}
                      />
                    </div>
                    <div className="cont">
                      <span>Project</span>
                      <h6>Consulting</h6>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="item wow fadeInLeft" data-wow-delay=".3">
                    <div className="skill">
                      <CircularProgressbar
                        value={78}
                        strokeWidth={2}
                        text={`${78}%`}
                        styles={cpStyle}
                      />
                    </div>
                    <div className="cont">
                      <span>App</span>
                      <h6>Development</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsCircle;
