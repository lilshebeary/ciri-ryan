import React from "react";
import { PorfolioLink } from "../../PortfolioElements";
const CameraApp = (props) => {
  return (
    <div>
      Camera app details
      <PorfolioLink
        smooth={true}
        duration={500}
        spy={true}
        exact="true"
        offset={-80}
        className="btn btn-outline-success btn-sm"
      >
        <a href="https://github.com/lilshebeary/presize-camera">code</a>
      </PorfolioLink>
    </div>
  );
};

export default CameraApp;
