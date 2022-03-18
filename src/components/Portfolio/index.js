import React from "react";
import Icon1 from '../../images/pSCam.png'
import Icon2 from '../../images/port-web.svg'
import Icon3 from '../../images/maze.svg'
import Icon4 from '../../images/color-pic.svg'
import Icon5 from '../../images/todo.svg'
import Icon6 from '../../images/food-app.svg'
import {
  PortfolioContainer,
  PortfolioH1,
  PortfolioWrapper,
  PortfolioCard,
  PortfolioH2,
  PortfolioIcon,
  PortfolioP,
  PorfolioLink,
  
} from "./PortfolioElements";



const Portfolio = () => {

  return (
  
    <PortfolioContainer id='portfolio'>
  
      <PortfolioH1>Projects</PortfolioH1>
    
      <PortfolioWrapper>

        <PortfolioCard>
        <PortfolioH2>Presize Camera</PortfolioH2>
          <PortfolioIcon src={Icon1} />
          <PortfolioP>
            React-Native Camera app with Redux
          </PortfolioP>
          <PorfolioLink
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                  className="btn btn-outline-success btn-sm"
                >
                  <a href='https://github.com/lilshebeary/presize-camera/tree/dev'>code</a>
                </PorfolioLink>
        </PortfolioCard>

        <PortfolioCard>
          <PortfolioH2>Portfolio Website</PortfolioH2>
          <PortfolioIcon src={Icon2} />
          <PortfolioP>
            A website with React and styled components
          </PortfolioP>
          <PorfolioLink
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                  className="btn btn-outline-success btn-sm"
                >
                  <a href='https://github.com/lilshebeary/ciri-ryan.github.io/tree/main/src'>code</a>
                </PorfolioLink>
        </PortfolioCard>

        <PortfolioCard>
        <PortfolioH2>Maze</PortfolioH2>
          <PortfolioIcon src={Icon3} />         
          <PortfolioP>
            Javascript with PaperJS game
          </PortfolioP>
          <PorfolioLink
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                  className="btn btn-outline-success btn-sm"
                >
                  <a href='https://github.com/lilshebeary/maze'>code</a>
                </PorfolioLink>
        </PortfolioCard>

        <PortfolioCard>
        <PortfolioH2>Color Pallete Site</PortfolioH2>
          <PortfolioIcon src={Icon4} />        
          <PortfolioP>
            React Color App
          </PortfolioP>
          <PorfolioLink
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                  className="btn btn-outline-success btn-sm"
                >
                  <a href='https://github.com/lilshebeary/color-app/tree/master'>code</a>
                </PorfolioLink>
        </PortfolioCard>

        <PortfolioCard>
          <PortfolioH2>Todos</PortfolioH2>
          <PortfolioIcon src={Icon5} />      
          <PortfolioP>
            React todo list with hooks
          </PortfolioP>
          <PorfolioLink
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                  className="btn btn-outline-success btn-sm"
                >
                  <a href='https://github.com/lilshebeary/todos-hooks'>code</a>
                </PorfolioLink>
        </PortfolioCard>

        <PortfolioCard>
          <PortfolioH2>Restaurant Search App</PortfolioH2>
          <PortfolioIcon src={Icon6} />
          <PortfolioP>
            React-native yelp api search app
          </PortfolioP>
          <PorfolioLink
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                  className="btn btn-outline-success btn-sm"
                >
                  <a href='https://github.com/lilshebeary/food'>code</a>
                </PorfolioLink>
        </PortfolioCard>

      </PortfolioWrapper>
    </PortfolioContainer> 
  );
};

export default Portfolio;