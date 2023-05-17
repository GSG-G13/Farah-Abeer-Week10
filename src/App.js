import logo from './logo.svg';
import './App.css';

import ParentComponent from './Components/ParentComponent';
import Navbar from './Components/Navbar';
import Slider from './Components/Slider';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Slider/>
      <ParentComponent/>
    </div>
  );
}

export default App;
