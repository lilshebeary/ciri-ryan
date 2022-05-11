import React from "react";
import { ModalLink } from "../../PortfolioElements";
import {
  ProjectTitle,
  ProjectImage,
  ProjectImageContainer,
  ProjectContent,
} from "./projects.styles";
const CameraApp = (props) => {
  const { project } = props;
  return (
    <div>
      <ProjectTitle></ProjectTitle>
      <ModalLink
        smooth={true}
        duration={500}
        spy={true}
        exact="true"
        offset={-80}
        className="btn btn-outline-success btn-sm"
      >
        <a target="_blank" href="https://github.com/lilshebeary/presize-camera">
          code
        </a>
      </ModalLink>
    </div>
  );
};

export default CameraApp;