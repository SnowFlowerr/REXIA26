import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/header/Header';
import About from './components/about/About';
import './App.css';

function App() {
  return (
    <div className='app'>
      <Header></Header>
      <Home/>
      <About/>
    </div>
  );
}

export default App;
