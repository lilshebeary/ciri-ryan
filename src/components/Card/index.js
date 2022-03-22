import React from "react";
import Icon1 from '../../images/pSCam.png'
import Icon2 from '../../images/port-web.svg'
import Icon3 from '../../images/maze.svg'
import Icon4 from '../../images/color-pic.svg'
import Icon5 from '../../images/todo.svg'
import Icon6 from '../../images/food-app.svg'
import {
  CardContainer,
  CardH2,
  CardIcon,
  CardP,
  CardLink,
  
} from "./CardElements";



const Card = () => {

  return (
     <>

        <CardContainer>
        <CardH2>Presize Camera</CardH2>
          <CardIcon src={Icon1} />
          <CardP>
            React-Native Camera app with Redux
          </CardP>
          <CardLink
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                  className="btn btn-outline-success btn-sm"
                >
                  <a href='https://github.com/lilshebeary/presize-camera/tree/dev'>code</a>
                </CardLink>
        </CardContainer>

        <CardContainer>
          <CardH2>Portfolio Website</CardH2>
          <CardIcon src={Icon2} />
          <CardP>
            A website with React and styled components
          </CardP>
          <CardLink
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                  className="btn btn-outline-success btn-sm"
                >
                  <a href='https://github.com/lilshebeary/ciri-ryan.github.io/tree/main/src'>code</a>
                </CardLink>
        </CardContainer>

        <CardContainer>
        <CardH2>Maze</CardH2>
          <CardIcon src={Icon3} />         
          <CardP>
            Javascript with PaperJS game
          </CardP>
          <CardLink
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                  className="btn btn-outline-success btn-sm"
                >
                  <a href='https://github.com/lilshebeary/maze'>code</a>
                </CardLink>
        </CardContainer>

        <CardContainer>
        <CardH2>Color Pallete Site</CardH2>
          <CardIcon src={Icon4} />        
          <CardP>
            React Color App
          </CardP>
          <CardLink
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                  className="btn btn-outline-success btn-sm"
                >
                  <a href='https://github.com/lilshebeary/color-app/tree/master'>code</a>
                </CardLink>
        </CardContainer>

        <CardContainer>
          <CardH2>Todos</CardH2>
          <CardIcon src={Icon5} />      
          <CardP>
            React todo list with hooks
          </CardP>
          <CardLink
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                  className="btn btn-outline-success btn-sm"
                >
                  <a href='https://github.com/lilshebeary/todos-hooks'>code</a>
                </CardLink>
        </CardContainer>

        <CardContainer>
          <CardH2>Restaurant Search App</CardH2>
          <CardIcon src={Icon6} />
          <CardP>
            React-native yelp api search app
          </CardP>
          <CardLink
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                  className="btn btn-outline-success btn-sm"
                >
                  <a href='https://github.com/lilshebeary/food'>code</a>
                </CardLink>
        </CardContainer>

        </>
  );
};

export default Card;