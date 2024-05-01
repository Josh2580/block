import React from "react";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
} from "react-router-dom";
//Routes
import Root from "./pages/routes/Root";
import ErrorPage from "./pages/routes/ErrorPage";
//Pages
import HomePage from "./pages/HomePage";
import EarnPage from "./pages/EarnPage";
import BotPage from "./pages/BotPage";
import BotSuccessPage from "./pages/BotSuccessPage";
import BotFailedPage from "./pages/BotFailedPage";
import ClaimPage from "./pages/ClaimPage";
import BoostPage from "./pages/BoostPage";
import AppsPage from "./pages/AppsPage";
import ReferalPage from "./pages/ReferalPage";
import ConnectWalletPage from "./pages/ConnectWalletPage";

const App = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<HomePage />} />
      <Route path="/connect-wallet" element={<ConnectWalletPage />} />
      <Route path="/claim" element={<ClaimPage />} />
      <Route path="/receive" element={<EarnPage />} />
      <Route path="/send" element={<AppsPage />} />
      <Route path="/referal" element={<ReferalPage />} />
      <Route path="/bot" element={<BotPage />} />
      <Route path="/swap" element={<BoostPage />} />
      <Route path="/bot-success" element={<BotSuccessPage />} />
      <Route path="/bot-failed" element={<BotFailedPage />} />
    </Route>
  )
);

export default App;
