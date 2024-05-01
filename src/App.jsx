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
import SendPage from "./pages/SendPage";
import ReceivePage from "./pages/ReceivePage";

const App = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<HomePage />} />
      <Route path="/send" element={<SendPage />} />
      <Route path="/receive" element={<ReceivePage />} />
    </Route>
  )
);

export default App;
