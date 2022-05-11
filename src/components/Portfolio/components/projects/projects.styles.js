import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

export const ProjectContainer = styled.div``;
export const ProjectHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`;
export const ProjectTitle = styled.h2`
  margin-bottom: 0;
`;
export const ProjectImageContainer = styled.div`
  margin-bottom: 2rem;
`;
export const ProjectImage = styled.img`
  display: block;
  height: auto;
  max-width: 100%;
`;
export const ProjectContent = styled.div`
  gap: 2rem;
`;
export const ProjectDescription = styled.div``;
export const ProjectLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
`;

const linkStyles = `background-color: #0c4a6e;
color: #f0f9ff;
padding: 0.8rem 1rem;
text-decoration: none;
width: 8rem;
display: block;
text-align: center;
&:hover {
  color: #bae6fd;
  background-color: #0284c7;
}`;

export const ProjectLink = styled(LinkR)`
  ${linkStyles}
`;
export const ProjectLinkAnchor = styled("a")`
  ${linkStyles}
`;

export const ProjectTechStack = styled.div`
  font-weight: 500;
  font-family: "Quicksand";
  margin-bottom: 1rem;
`;

export const CloseIconBtn = styled.button`
  background: transparent;
  border: none;
`;
export const CloseIcon = styled(FaTimes)`
  color: #0c4a6e;
`;
