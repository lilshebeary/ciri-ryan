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
      </PortfolioWrapper>
    </PortfolioContainer>
  );
};

export default Portfolio;