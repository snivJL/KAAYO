import { combineReducers } from "redux";
import userReducer from "./user.reducer";
import orderReducer from "./order.reducer";
import authReducer from "./auth.reducer";
import productReducer from "./product.reducer";
import messageReducer from "./message.reducer";
import couponReducer from "./coupon.reducer";

export default combineReducers({
  user: userReducer,
  product: productReducer,
  order: orderReducer,
  auth: authReducer,
  message: messageReducer,
  coupon: couponReducer,
});
