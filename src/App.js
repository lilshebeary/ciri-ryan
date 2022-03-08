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
    </div>
  );
}

export default App;
