import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import AppRoutes from './routes';


function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Header />
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;
