import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import About from './components/about';
import Home from './components/home';
import ContactUs from './components/contactUs';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to REACT TODO APP</h1>
        <nav>
          <Link to="/about">About</Link>
        </nav>
        <nav>
          <Link to="/">Home</Link>
        </nav>
        <nav>
          <Link to="/contactus">ContactUs</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contactus" element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
