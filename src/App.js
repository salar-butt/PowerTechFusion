import './App.css';
import Main from './components/Main';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </div>
  );
}

export default App;
