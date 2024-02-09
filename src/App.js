import './App.scss';
import Header from './Header';
import Quote from './Quote';
import SvgImage from './Svg.js';
import svgHbd from './image/happy-birthday.svg';
import svgFb from './image/first-box.svg';
import svgSb from './image/second-box.svg';



function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <div className="left-column">
          <SvgImage src={svgHbd} />
        </div>
        <div className="right-column">
          <Quote />
          <SvgImage src={svgFb} />
          <SvgImage src={svgSb} />
        </div>
      </div>
    </div>
  );
}

export default App;
