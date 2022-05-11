import React, { useState } from "react";
import {
  PortfolioContainer,
  PortfolioH1,
  PortfolioWrapper,
  PortfolioCard,
  PortfolioH2,
  PortfolioIcon,
  PortfolioP,
  PorfolioLink,
  ModalLink,
} from "./PortfolioElements";
import ViewPortfolio from "./components/ViewPortfolio";
import { useToggleState } from "../../hooks";
import { projects } from "./projects.config";
import DisplayDefaultProjectView from "./components/projects/DisplayDefaultProjectView";

const projectDetails = {

  Default: DisplayDefaultProjectView,
};

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [
    isViewPortfolioModalOpen,
    { on: viewPortfolioModal, off: closePortfolioModal },
  ] = useToggleState(false);

  const onViewPorfolio = (project) => {
    if (!(project.tag in projectDetails))
      throw new Error(
        `Project ${project} is not configured. Add it to the projectDetails object.`
      );
    return () => {
      console.log("setting project", project, projectDetails);
      setSelectedProject(project);
      viewPortfolioModal();
    };
  };
 
  const ProjectDetailsModalContent = projectDetails[selectedProject?.tag];

  return (
    <PortfolioContainer id="portfolio">
      <PortfolioH1>Projects</PortfolioH1>
      <ViewPortfolio
        isOpen={isViewPortfolioModalOpen}
        onClose={closePortfolioModal}
      >
        {ProjectDetailsModalContent
          ? React.createElement(ProjectDetailsModalContent, {
              project: selectedProject,
              onClose: () => {
                closePortfolioModal();
                setSelectedProject(null);
              },
            })
          : null}
      </ViewPortfolio>
      <PortfolioWrapper>
        {projects.map((project) => {
          const { id, title, excerpt, img } = project;
          return (
            <PortfolioCard key={id}>
              <PortfolioH2>{title}</PortfolioH2>
              <PortfolioIcon src={img} />
              <PortfolioP>{excerpt}</PortfolioP>
              <ModalLink
                className="btn btn-outline-success btn-sm"
                onClick={onViewPorfolio(project)}
              >
                View
              </ModalLink>
            </PortfolioCard>
          );
        })}
{/* <PortfolioCard>
          <PortfolioH2>Portfolio Website</PortfolioH2>
          <PortfolioIcon src={Icon2} />
          <PortfolioP>A website with React and styled components</PortfolioP>
          <PorfolioLink
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            className="btn btn-outline-success btn-sm"
          >
            <a href="https://github.com/lilshebeary/ciri-ryan">code</a>
          </PorfolioLink>
        </PortfolioCard> */}
        {/* 
        <PortfolioCard>
          <PortfolioH2>Maze</PortfolioH2>
          <PortfolioIcon src={Icon3} />
          <PortfolioP>Javascript with PaperJS game</PortfolioP>
          <ModalLink
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            className="btn btn-outline-success btn-sm"
            onClick={onViewPorfolio("PaperJSGame")}
          >
            View
          </ModalLink>
          <PorfolioLink
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            className="btn btn-outline-success btn-sm"
          >
            <a href="https://github.com/lilshebeary/maze">code</a>
          </PorfolioLink>
        </PortfolioCard>
        <PortfolioCard>
          <PortfolioH2>Color Pallete Site</PortfolioH2>
          <PortfolioIcon src={Icon4} />
          <PortfolioP>React Color App</PortfolioP>
          <PorfolioLink
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            className="btn btn-outline-success btn-sm"
          >
            <a href="https://github.com/lilshebeary/color-app">code</a>
          </PorfolioLink>
        </PortfolioCard>
        <PortfolioCard>
          <PortfolioH2>Todos</PortfolioH2>
          <PortfolioIcon src={Icon5} />
          <PortfolioP>React todo list with hooks</PortfolioP>
          <PorfolioLink
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            className="btn btn-outline-success btn-sm"
          >
            <a href="https://github.com/lilshebeary/todos-hooks">code</a>
          </PorfolioLink>
        </PortfolioCard>
        <PortfolioCard>
          <PortfolioH2>Restaurant Search App</PortfolioH2>
          <PortfolioIcon src={Icon6} />
          <PortfolioP>React-native yelp api search app</PortfolioP>
          <PorfolioLink
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            className="btn btn-outline-success btn-sm"
          >
            <a href="https://github.com/lilshebeary/food">code</a>
          </PorfolioLink>
        </PortfolioCard> */}
      </PortfolioWrapper>
    </PortfolioContainer>
  );
};

export default Portfolio;