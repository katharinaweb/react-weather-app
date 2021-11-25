import "./App.css";
import City from "./City";
import Today from "./Today";
import Forecast from "./Forecast";
import Searchform from "./Searchform";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="container">
          <City />
          <Today />
          <br />
          <br />
          <Forecast />
          <br />
          <Searchform />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
