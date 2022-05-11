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
  ProjectLinkAnchor,
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
              const { to, href, text, props: linkProps } = link;
              console.log("check", link, to, text, props);
              if (to) {
                linkProps.to = to;
              } else if (href) {
                linkProps.href = href;
              }
              const LinkComponent = to ? ProjectLink : ProjectLinkAnchor;
              return (
                <LinkComponent key={idx} {...linkProps}>
                  {text}
                </LinkComponent>
              );
            })}
          </ProjectLinks>
        ) : null}
      </ProjectContent>
    </ProjectContainer>
  );
};

export default DisplayDefaultProjectView;
