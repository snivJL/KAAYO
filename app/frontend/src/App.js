import PublicNavbar from "./components/Header/PublicNavbar";
import Navbar2 from "./components/Header/Navbar2";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import HomePage2 from "./pages/HomePage2";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import CreateProductPage from "./pages/admin/CreateProductPage";
import EditProductPage from "./pages/admin/EditProductPage";
import ShopPage from "./pages/ShopPage";
import IngredientsPage from "./pages/IngredientsPage";
import CartPage from "./pages/order/CartPage";
import ShippingPage from "./pages/order/ShippingPage";
import PaymentPage from "./pages/order/PaymentPage";
import PlaceOrderPage from "./pages/order/PlaceOrderPage";
import OrderPlacedPage from "./pages/order/OrderPlacedPage";
import ProductPage from "./pages/ProductPage";
import ContactPage from "./pages/ContactPage";
import ProductListPage from "./pages/admin/ProductListPage";
import MessagePage from "./pages/admin/MessagePage";
import OrderListPage from "./pages/admin/OrderListPage";
import "react-toastify/dist/ReactToastify.css";
import MyOrdersPage from "./pages/order/MyOrdersPage";
import MessengerChat from "./components/MessengerChat";
import PrivateRoute from "./components/PrivateRoute";
import { useEffect } from "react";
import userActions from "./redux/actions/user.actions";
import { useDispatch, useSelector } from "react-redux";
import UserListPage from "./pages/admin/UserListPage";
import AboutPage from "./pages/AboutPage";
function App() {
  const dispatch = useDispatch();
  // const token = localStorage.getItem("token");
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    if (token) dispatch(userActions.getCurrentUser());
  }, [token, dispatch]);
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
          <Navbar2 />
        </header>
        <main>
          <Switch>
            <Route path="/" exact component={HomePage2} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Route exact path="/shop" component={ShopPage} />
            <Route path="/shop/:cat" component={ShopPage} />
            <Route path="/search/:keyword" component={ShopPage} />
            <Route path="/cart" component={CartPage} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/ingredients" component={IngredientsPage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/order/shipping" component={ShippingPage} />
            <Route path="/order/payment" component={PaymentPage} />
            <Route path="/order/finalize" component={PlaceOrderPage} />
            <Route path="/order/summary" component={OrderPlacedPage} />
            <PrivateRoute path="/profile/myorders" component={MyOrdersPage} />
            <Route path="/product/:id" component={ProductPage} />
            <PrivateRoute
              path="/admin/product/create"
              component={CreateProductPage}
            />
            <PrivateRoute
              path="/admin/product/list"
              component={ProductListPage}
            />
            <PrivateRoute path="/admin/message/list" component={MessagePage} />
            <PrivateRoute path="/admin/user/list" component={UserListPage} />
            <PrivateRoute
              path="/admin/product/:id/edit"
              component={EditProductPage}
            />
            <PrivateRoute path="/admin/order/list" component={OrderListPage} />
          </Switch>
          {/* <MessengerChat /> */}
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
