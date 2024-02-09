import './App.scss';
import Header from './Header';
import Quote from './Quote';
import SvgImage from './Svg.js';
import svgSrc from './image/happy-birthday.svg';



function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <div className="left-column">
        <SvgImage src={svgSrc} />
          {}
        </div>
        <div className="right-column">
          <Quote />
          
        </div>
      </div>
    </div>
  );
}

export default App;
