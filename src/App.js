import "./App.css";
import bg from './background.svg'

function App() {
  return (
    <div className="App">
      
      <div className="nav">
        <nav className="navbar">
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
      <hr className="hr" />
<section>
      <div className="name-title">
        <h1>Ciri Ryan</h1>
        <h2>Software Developer</h2>
      </div>
 </section>
 <hr className="btm-hr"/>
    <div className="social">
    <i class="fa-brands fa-linkedin-in"></i>
    <i class="fa-brands fa-github"></i>
    <i class="fa-brands fa-codepen"></i>
    </div>

    </div>
  );
}

export default App;
