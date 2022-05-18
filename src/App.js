import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';
import Welcome from './components/Welcome';
import Overview from './components/Overview';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div>
        <Header />
        <Routes >
          <Route path="/" element={<Login />}/>
          <Route path="landing" element={<Landing />}/>
          <Route path="register" element={<Register />} />
          <Route path="welcome" element={<Welcome />} />
          <Route path="overview" element={<Overview />} />
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
