import PublicNavbar from "./components/Header/PublicNavbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import CreateProductPage from "./pages/admin/CreateProductPage";
import EditProductPage from "./pages/admin/EditProductPage";
import ShopPage from "./pages/ShopPage";
import CartPage from "./pages/order/CartPage";
import ShippingPage from "./pages/order/ShippingPage";
import PaymentPage from "./pages/order/PaymentPage";
import PlaceOrderPage from "./pages/order/PlaceOrderPage";
import OrderPlacedPage from "./pages/order/OrderPlacedPage";
import ProductPage from "./pages/ProductPage";
import ContactPage from "./pages/ContactPage";
import ProductListPage from "./pages/admin/ProductListPage";
import OrderListPage from "./pages/admin/OrderListPage";
import "react-toastify/dist/ReactToastify.css";
import MyOrdersPage from "./pages/order/MyOrdersPage";

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
        </header>
        <main>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Route exact path="/shop" component={ShopPage} />
            <Route path="/shop/:cat" component={ShopPage} />
            <Route path="/search/:keyword" component={ShopPage} />
            <Route path="/cart" component={CartPage} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/order/shipping" component={ShippingPage} />
            <Route path="/order/payment" component={PaymentPage} />
            <Route path="/order/finalize" component={PlaceOrderPage} />
            <Route path="/order/summary" component={OrderPlacedPage} />
            <Route path="/profile/myorders" component={MyOrdersPage} />
            <Route path="/product/:id" component={ProductPage} />
            <Route path="/admin/product/create" component={CreateProductPage} />
            <Route path="/admin/product/list" component={ProductListPage} />
            <Route path="/admin/product/:id/edit" component={EditProductPage} />
            <Route path="/admin/order/list" component={OrderListPage} />
          </Switch>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
