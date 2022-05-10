import pSCam from "../../images/pSCam.png";
import Icon2 from "../../images/port-web.svg";
import Icon3 from "../../images/maze.svg";
import Icon4 from "../../images/color-pic.svg";
import Icon5 from "../../images/todo.svg";
import Icon6 from "../../images/food-app.svg";

export const projects = [
  {
    id: 1,
    title: "Presize Camera",
    img: pSCam,
    excerpt: "React-Native Camera app with Redux",
    description: "Lorem ipsum",
    tag: "CameraApp",
    links: [],
  },
  {
    id: 2,
    title: "Portfolio Website",
    img: Icon2,
    excerpt: "A website with React and styled components",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget dignissim enim. Phasellus a blandit quam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec bibendum non eros luctus mattis. Sed at nisi congue, molestie erat et, posuere tortor. Praesent id purus in nisi efficitur pharetra at nec tellus. Nulla convallis nec enim nec fringilla. Phasellus semper mi id urna convallis condimentum. Sed lorem dui, suscipit id lobortis sit amet, euismod a nisl. Praesent ut metus tristique, lacinia turpis ut, pellentesque dui. Donec ac lacinia metus.
   
    Nunc pharetra, tortor in luctus commodo, magna ante pellentesque lectus, a malesuada libero erat in enim. Phasellus hendrerit sapien nec arcu porttitor venenatis. Ut sed turpis in felis varius ullamcorper at eu velit. Sed a ante dignissim nunc condimentum ultricies sit amet quis ex. Praesent ullamcorper risus massa, vitae laoreet ex consequat et. Curabitur hendrerit accumsan quam, quis feugiat erat maximus ac. Vivamus vel lorem sed nisi dapibus faucibus. Maecenas sed diam ipsum. Nam in malesuada neque. Praesent pulvinar augue sit amet tempus tempus. Nam rhoncus tincidunt metus et lacinia.
    
    Sed laoreet ac quam quis iaculis. Nulla facilisi. Vivamus hendrerit quis neque at molestie. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla non quam facilisis, feugiat mi eget, aliquet metus. Pellentesque nec facilisis nisi. Quisque mattis euismod elit, et laoreet turpis gravida eu.
    
    Ut mauris tellus, mattis non urna in, sodales consequat augue. Mauris convallis tortor nec purus vehicula malesuada. Vestibulum tempor aliquam posuere. Donec vestibulum ligula in est congue ultrices. Suspendisse convallis tincidunt lectus ultricies pulvinar. Praesent sed ligula rutrum, feugiat dui eu, interdum turpis. Nunc lacinia maximus facilisis. Proin urna libero, imperdiet vitae pharetra ut, tempus et sapien. Morbi ut sem fermentum, malesuada nibh eget, laoreet nulla.
    
    In hac habitasse platea dictumst. Sed sit amet quam bibendum, volutpat nulla a, aliquet enim. Praesent a ipsum quis diam vulputate maximus. Pellentesque eu nisi justo. In imperdiet mi et purus egestas convallis. Curabitur feugiat eros in dui placerat, at bibendum ipsum dapibus. Nulla facilisi. Nulla lacus sem, tincidunt ac mattis vel, hendrerit in lectus. Nulla posuere fermentum vehicula. Maecenas pellentesque sem vel semper dapibus. Nullam libero leo, porttitor non felis ac, aliquet fringilla leo.`,
    tag: "Default",
    techStack: ["React", "Styled Components"],
    links: [
      {
        to: "https://github.com/lilshebeary/ciri-ryan",
        text: "code",
        props: {},
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
          <p>Hello wrodl</p>
          <ul>
            <li>one</li>
            <li>two</li>
          </ul>
        </div>
      );
    },
    tag: "Default",
    links: [
      {
        to: "https://github.com/lilshebeary/maze",
        text: "code",
        props: {},
      },
    ],
  },
  {
    id: 4,
    title: "Color Pallete Site",
    img: Icon4,
    excerpt: "React Color App",
    description: "lorem ipsum",
    tag: "Default",
    links: [
      {
        to: "https://github.com/lilshebeary/color-app",
        text: "code",
        props: {},
      },
    ],
  },
  {
    id: 5,
    title: "Todos",
    img: Icon5,
    excerpt: "React todo list with hooks",
    description: "lorem ipsum",
    tag: "Default",
    links: [
      {
        to: "https://github.com/lilshebeary/todos-hooks",
        text: "code",
        props: {},
      },
    ],
  },
  {
    id: 6,
    title: "Restaurant Search App",
    img: Icon6,
    excerpt: "React-native yelp api search app",
    description: "lorem ipsum",
    tag: "Default",
    links: [
      {
        to: "https://github.com/lilshebeary/food",
        text: "code",
        props: {},
      },
    ],
  },
];
