import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
