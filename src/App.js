import { Outlet } from 'react-router';
import './App.css';
import Apicall from './components/Apicall';

function App() {
  return (
    <div className="App">
      <Apicall/>
      <Outlet/>
    </div>
  );
}

export default App;
