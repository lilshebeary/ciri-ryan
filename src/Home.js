import React, { useEffect } from 'react'
import bg from './images/ciri-logo.svg'
import { FaBars } from 'react-icons/fa';
const Home = () => { 
  
  useEffect(() => {
   document.body.style.overflow = "hidden";
  }, []);

  return (
    <div className="App">
      
    <div className="nav">
      <nav className="navbar">
      <div className="name-title">
      <h1>Ciri Ryan</h1>
      {/* <h2>Software Developer</h2> */}
    </div>
        <li class="nav-item">
          <a class="nav-link" href="./About.js">
          <button type="button" class="btn btn-outline-dark rounded-pill lg">About </button>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Portfolio.js">
          <button type="button" class="btn btn-outline-dark rounded-pill">Portfolio </button>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Contact.js">
          <button type="button" class="btn btn-outline-dark rounded-pill "> Contact </button>
          </a>
        </li>
      </nav>
    </div>
    <hr className="hr-top" />
    <section>

    <img src={bg} alt="JS react-native react node express rest api"></img>
  <div className="night">
    <div className="shooting_star">
      </div>
    </div>

   </section>
<hr className="btm-hr"/>
  <div className="social">
  <a href="https://www.linkedin.com/in/ciri-ryan-150a571a0/" title="linkedin"><i class="fa-brands fa-linkedin-in"></i></a>
  <a href="https://github.com/lilshebeary" title="github"><i class="fa-brands fa-github"></i></a>
  <a href="https://codepen.io/lilshebeary" title="codepen"><i class="fa-brands fa-codepen"></i></a>
  </div>

  </div>
  )
}

export default Home





