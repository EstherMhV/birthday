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
        <SvgImage className="SvgImage" src={svgHbd} />
        </div>
        <div className="right-column">
          <div className="column">
            <div className="container box-with-shadow">
              <Quote />
            </div>
            <div className="container box-with-shadow">
              <div class="gif"><iframe src="https://giphy.com/embed/l0ExwdBR4em4BrcCA" allowFullScreen></iframe></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
