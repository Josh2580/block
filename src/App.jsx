import React from "react";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
} from "react-router-dom";
//Routes
import Root from "./pages/routes/Root";

//Pages
import HomePage from "./pages/HomePage";

const App = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<HomePage />} />
    </Route>
  )
);

export default App;
