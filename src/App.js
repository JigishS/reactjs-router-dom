import "./App.css";
import { BrowserRouter, Link, Route } from "react-router-dom";

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
      <BrowserRouter>
        <div>
          <Route path="/" exact component={PageOne} />
          <Route path="/pagetwo" component={PageTwo} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
