import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "../pages/home/Home";

export function Routes() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" Component={Home}>
        <Route path="/home" Component={Home} />
      </Route>
    )
  );

  return <RouterProvider router={routes} />;
}
