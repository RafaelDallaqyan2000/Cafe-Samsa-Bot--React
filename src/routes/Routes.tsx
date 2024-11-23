import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "../pages/Home/Home";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Basket from "../pages/basket/Basket";
import Reditect from "./Reditect";
import PlaceOrder from "../pages/PlaceOrder/PlaceOrder";

export function Routes() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Reditect to="/home" children={<Home />} />} />
        <Route path="/home" Component={Home} />
        {/* <Route path="/product-details">
          <Route path=":productId" Component={ProductDetails} />
        </Route> */}
        <Route path="/busket" Component={Basket} />
        <Route path="/placeOrder" Component={PlaceOrder} />
      </Route>
    )
  );

  return <RouterProvider router={routes} />;
}
