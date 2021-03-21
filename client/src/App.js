import PublicNavbar from "./components/PublicNavbar";
import CategoriesPanel from "./components/CategoriesPanel";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <header>
        <PublicNavbar />
        <CategoriesPanel />
      </header>
      <main className="grid h-full items-center justify-center">
        <Switch>
          <HomePage />
        </Switch>
      </main>
      <footer>
        <Footer />
      </footer>
    </Router>
  );
}

export default App;
