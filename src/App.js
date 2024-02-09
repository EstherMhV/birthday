import './App.scss';
import Header from './Header';
import Quote from './Quote';
import SvgImage from './svg.js';
import svgSrc from './image/joyeux anniversaire'; 

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <div className="left-column">
          <SvgImage src={svgSrc} />
          {/* Add more SvgImage components as needed */}
        </div>
        <div className="right-column">
          <Quote />
          <SvgImage src={svgSrc} />
        </div>
      </div>
    </div>
  );
}

export default App;