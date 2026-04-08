// import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/header/Header';
import About from './components/about/About';
import './App.css';
import Sponsors from './components/sponsor/Sponsors';
import Contact from './components/contact/Contact';
import Team from './components/team/Team';

function App() {
  return (
    <div className='app'>
      <Header/>
      <Home/>
      <About/>
      <Sponsors/>
      <Team/>
      <Contact/>
    </div>
  );
}

export default App;
