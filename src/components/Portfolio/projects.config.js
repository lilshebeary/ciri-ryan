import Icon1 from "../../images/pSCam.png";
import Icon2 from "../../images/CWeb1.svg";
import Icon3 from "../../images/maze.svg";
import Icon4 from "../../images/color-pic.svg";
import Icon5 from "../../images/todo.svg";
import Icon6 from "../../images/food-app.svg";
import {
  FaBreadSlice,
  FaFolderPlus,
  FaShoePrints,
  FaSimplybuilt,
} from "react-icons/fa";

export const projects = [
  {
    id: 1,
    title: "Presize Camera",
    img: Icon1,
    excerpt: "React-Native Camera app with Redux",
    description: `React Native camera app that lets you size your photos before you take them,
     organize them into folders, share with friends and family, 
     and purchase prints from popular print shops. This app was created using funtional components, hooks, and Redux. 
     It will also eventually use Node, express, and DynamoDB as well as other AWS products`,
    tag: "Default",
    techStack: ["React"],
    links: [
      {
        href: "https://github.com/lilshebeary/presize-camera",
        text: "code on request",
        props: {
          target: "_blank",
        },
      },
    ],
  },
  {
    id: 2,
    title: "Portfolio Website",
    img: Icon2,
    excerpt: "A website with React and styled components",
    description: `My portfolio website was created using React and styled components 
    with some CSS and HTML. Styled components are new to me and I wanted to try them out.`,
    tag: "Default",
    techStack: ["React", "Styled Components"],
    links: [
      {
        to: "https://github.com/lilshebeary/ciri-ryan",
        text: "code",
        props: {
          target: "_blank",
        },
      },
    ],
  },
  {
    id: 3,
    title: "Maze",
    img: Icon3,
    excerpt: "Javascript with PaperJS game",
    description: (project) => {
      return (
        <div>
          <p>
            This is a Javascript project that I did in a Javascript course using
            the PaperJS library
          </p>
          <p>
            In the maze it is dynamic and you can make it as complex as you
            like. to move, you simple use the w a s d keys to get to the end and
            then the gravity is removed and it all falls down. Or, is that the
            other way around??
          </p>
        </div>
      );
    },
    tag: "Default",
    techStack: ["React", "PaperJS library", "HTML"],
    links: [
      {
        href: "https://github.com/lilshebeary/maze",
        text: "code",
        props: {
          target: "_blank",
        },
      },
    ],
  },
  {
    id: 4,
    title: "Color Pallete Site",
    img: Icon4,
    excerpt: "React Color App",
    description: `This Color website was created from a React course using class based components.
    you can select and create your own color palatte.`,
    tag: "Default",
    links: [
      {
        href: "https://github.com/lilshebeary/color-app",
        text: "code",
        props: {
          target: "_blank",
        },
      },
    ],
  },
  {
    id: 5,
    title: "Todos",
    img: Icon5,
    excerpt: "React todo list with hooks",
    description: `This is a simple but helpful todo from react using hooks and context.`,
    tag: "Default",
    techStack: ["React"],
    links: [
      {
        href: "https://github.com/lilshebeary/todos-hooks-context",
        text: "code",
        props: {
          target: "_blank",
        },
      },
    ],
  },
  {
    id: 6,
    title: "Restaurant Search App",
    img: Icon6,
    excerpt: "React-native yelp api search app",
    description: `This is a simple React Native app using the Yelp API`,
    tag: "Default",
    techStack: ["React"],
    links: [
      {
        href: "https://github.com/lilshebeary/food",
        text: "code",
        props: {
          target: "_blank",
        },
      },
    ],
  },
];
