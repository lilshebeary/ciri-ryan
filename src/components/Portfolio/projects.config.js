import Icon1 from "../../images/pSCam.png";
import Icon2 from "../../images/portfolio-pic.svg";
import Icon3 from "../../images/bootcamp.svg";
import Icon4 from "../../images/smiley.svg";
import Icon5 from "../../images/abcdefg.svg";
import Icon6 from "../../images/food-app.svg";


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
        href: "https://github.com/lilshebeary/ciri-ryan",
        text: "code",
        props: {
          target: "_blank",
        },
      },
    ],
  },
  {
    id: 3,
    title: "Bootcamp signup",
    img: Icon3,
    excerpt: "Bootcamp signup",
    description: (project) => {
      return (
        <div>
          <p>
            This is a Javascript project that I did in a Javascript course in my bootcamp
          </p>
         
        </div>
      );
    },
    tag: "Default",
    links: [
      {
        href: "https://github.com/lilshebeary/bootcamp-registration",
        text: "code",
        props: {
          target: "_blank",
        },
      },
    ],
  },
  {
    id: 4,
    title: "Smiley Face Game",
    img: Icon4,
    excerpt: "Vanilla JS Smiley Face Matching Game",
    description: `This was created as a homework assignment in my bootcamp.`,
    tag: "Default",
    links: [
      {
        href: "https://github.com/lilshebeary/smiley-game",
        text: "code",
        props: {
          target: "_blank",
        },
      },
    ],
  },
  {
    id: 5,
    title: "Carousel",
    img: Icon5,
    excerpt: "React Alphabet Carousel",
    description: `This is a simple alphabet carousel for my daughter who is learning letters.`,
    tag: "Default",
    techStack: ["React"],
    links: [
      {
        href: "https://github.com/lilshebeary/AbeeCDEFG",
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
