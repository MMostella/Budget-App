import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />}/>
          <Route path="login" element={<Login />}/>
          <Route path="register" element={<Register />} />
          <Route path="welcome" element={<Welcome />} />
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
