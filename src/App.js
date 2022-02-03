import './App.css';
import Navi from './components/layouts/Navi';
import Dashboard from './components/layouts/Dashboard';
import SideBar from './components/layouts/SideBar';

function App() {
  return (
    <div className="App">
      <Navi/>
      <SideBar/>
      <Dashboard/>
    </div>
  );
}

export default App;
