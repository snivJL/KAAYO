import PublicNavbar from "./components/Header/PublicNavbar";
import CategoriesPanel from "./components/Header/CategoriesPanel";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import Test from "./pages/Test";
import { BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <header>
          <PublicNavbar />
          <CategoriesPanel />
        </header>
        <div className="bg-gray-100">
          <Switch>
            <HomePage />
            {/* <Test /> */}
          </Switch>
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
