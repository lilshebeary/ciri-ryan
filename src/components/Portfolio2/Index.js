import React from "react";
import Icon1 from "../../images/pSCam.png";
import Icon2 from "../../images/port-web.svg";
import Icon3 from "../../images/maze.svg";
import Icon4 from "../../images/color-pic.svg";
import Icon5 from "../../images/todo.svg";
import Icon6 from "../../images/food-app.svg";
import AnimatedCard from "../AnimatedCard";

const Portfolio2 = (props) => {
  return (
    <>
      <AnimatedCard
        img={Icon1}
        content="React-Native Camera app with Redux"
        link="private, please ask for tour"
      />
      <AnimatedCard
        img={Icon2}
        content="React-Native Camera app with Redux"
        link="private, please ask for tour"
      />
      <AnimatedCard
        img={Icon3}
        content="React-Native Camera app with Redux"
        link="private, please ask for tour"
      />
      <AnimatedCard
        img={Icon4}
        content="React-Native Camera app with Redux"
        link="private, please ask for tour"
      />
      <AnimatedCard
        img={Icon5}
        content="React-Native Camera app with Redux"
        link="private, please ask for tour"
      />
      <AnimatedCard
        img={Icon6}
        content="React-Native Camera app with Redux"
        link="private, please ask for tour"
      />
    </>
  );
};

export default Portfolio2;
