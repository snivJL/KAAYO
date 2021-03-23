import PublicNavbar from "./components/Header/PublicNavbar";
import CategoriesPanel from "./components/Header/CategoriesPanel";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <div className="app">
        <ToastContainer
          pauseOnHover
          newestOnTop={false}
          position="bottom-center"
          hideProgressBar={false}
          autoClose={1500}
        />
        <header>
          <PublicNavbar />
          <CategoriesPanel />
        </header>
        <div className="bg-gray-100">
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" exact component={RegisterPage} />
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
