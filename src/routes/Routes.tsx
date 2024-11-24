import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Basket from "../pages/basket/Basket";
import Reditect from "./Reditect";
import PlaceOrder from "../pages/PlaceOrder/PlaceOrder";
import Home from "../pages/Home/Home";

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
