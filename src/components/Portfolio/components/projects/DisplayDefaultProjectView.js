import React from "react";
import {
  ProjectContainer,
  ProjectHeader,
  ProjectTitle,
  ProjectImage,
  ProjectImageContainer,
  ProjectContent,
  ProjectDescription,
  ProjectLinks,
  ProjectLink,
  ProjectTechStack,
  CloseIconBtn,
  CloseIcon,
} from "./projects.styles";
const DisplayDefaultProjectView = (props) => {
  const { project, onClose } = props;
  const { title, description, img, links, excerpt, techStack } = project;
  console.log("links", links);
  return (
    <ProjectContainer>
      <ProjectHeader>
        <ProjectTitle>{title}</ProjectTitle>
        <CloseIconBtn onClick={onClose}>
          <CloseIcon size={24} />
        </CloseIconBtn>
      </ProjectHeader>
      <ProjectContent>
        <ProjectImageContainer>
          <ProjectImage src={img} />
        </ProjectImageContainer>
        {techStack ? (
          <ProjectTechStack>
            Tech Stack -{" "}
            {Array.isArray(techStack) ? techStack.join(", ") : techStack}
          </ProjectTechStack>
        ) : null}
        {typeof description === "function" ? (
          description(project)
        ) : (
          <ProjectDescription
            dangerouslySetInnerHTML={{ __html: description || excerpt }}
          />
        )}
        {Array.isArray(links) && links.length ? (
          <ProjectLinks>
            {links.map((link, idx) => {
              const { to, text, props: linkProps } = link;
              console.log("check", link, to, text, props);
              return (
                <ProjectLink key={idx} to={to} {...linkProps}>
                  {text}
                </ProjectLink>
              );
            })}
          </ProjectLinks>
        ) : null}
      </ProjectContent>
    </ProjectContainer>
  );
};

export default DisplayDefaultProjectView;
