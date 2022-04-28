import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="wrapper">
      <div className="d-block">
        <center>
          <div className="title">WELCOME TO YOUR GIPHY</div>
          <div className="p-logo">
            <img
              alt="logo"
              src="https://developers.giphy.com/branch/master/static/header-logo-0fec0225d189bc0eae27dac3e3770582.gif"
              className="logo"
            />
          </div>
          <div className="p-link">
            <Link to="/ironman">IRON GIPHY</Link>
          </div>
          <Link to="/search">SEARCH YOUR GIPHY</Link>
        </center>
      </div>
    </div>
  );
}

export default App;
