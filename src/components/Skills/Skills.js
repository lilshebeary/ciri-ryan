import React from "react";
import {
  SkillsContainer,
  SkillsContent,
  SkillsTitle,
  SkillsList,
  SkillsItem,
} from "./skills.styles.js";

const skillsList = [
  "JavaScript",
  "React",
  "React Native",
  "HTML",
  "CSS",
  "Bootstrap",
  "Material UI",
  "Semantic UI",
  "Figma",
  "REST",
  "Jira",
  "Git",
  "GitHub",
  "MySQL",
  "C#",
  "MongoDB",
  "Java",
  "Python",
];

const Skills = (props) => {
  return (
    <SkillsContainer id="skills">
      <SkillsContent>
        <SkillsTitle>Skills & Tools</SkillsTitle>

        <SkillsList>
          {skillsList.map((skill, idx) => {
            return <SkillsItem key={idx}>{skill}</SkillsItem>;
          })}
        </SkillsList>
      </SkillsContent>
    </SkillsContainer>
  );
};

export default Skills;
