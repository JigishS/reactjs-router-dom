import "./App.css";
import { HashRouter, Link, Route } from "react-router-dom";

const PageOne = () => {
  return (
    <div>
      Page One <Link to="/pagetwo">Navigate to pagetwo</Link>
    </div>
  );
};

const PageTwo = () => {
  return (
    <div>
      Page Two <Link to="/">Navigate to pageone</Link>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <HashRouter>
        <div>
          <Route path="/" exact component={PageOne} />
          <Route path="/pagetwo" component={PageTwo} />
        </div>
      </HashRouter>
    </div>
  );
};

export default App;
