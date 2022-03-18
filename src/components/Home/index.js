import React from 'react'
import bg from '../../images/cr-logo.svg'
import '../../App.css';
import { HomeContainer } from './HomeElements';


const Home = () => { 


  return (
    <HomeContainer>
      <div className='App'>
    <section>
    <img src={bg} alt='javascript, react-native, react, node, express, rest api'></img>
   </section>

<hr className="btm-hr"/>

  <div className="social">
  <a href="https://www.linkedin.com/in/ciri-ryan-150a571a0/" title="linkedin"><i class="fa-brands fa-linkedin-in"></i></a>
  <a href="https://github.com/lilshebeary" title="github"><i class="fa-brands fa-github"></i></a>
  <a href="https://codepen.io/lilshebeary" title="codepen"><i class="fa-brands fa-codepen"></i></a>
  </div>
</div>
  </HomeContainer>
  )
}

export default Home