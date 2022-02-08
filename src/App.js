import './App.css';
import Navi from './components/layouts/Navi';
import Dashboard from './components/layouts/Dashboard';
import SideBar from './components/layouts/SideBar';
import axios from 'axios';
import { useSelector } from 'react-redux';

function App() {
  return (
    <div className="App">
      <Dashboard/>
    </div>
  );
}

export default App;
