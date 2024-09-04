import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import LogIn from "./pages/LogIn/LogIn";
import SignUp from "./pages/SignUp/SignUp";
import ForgotPass from "./pages/ForgotPass/ForgotPass";
import ResetPass from "./pages/ResetPass/ResetPass";

const routes = (
  <Router>
    <Routes>
      <Route path="/" exact element={<LogIn />} />
      <Route path="/dashboard" exact element={<Home />} />
      <Route path="/login" exact element={<LogIn />} />
      <Route path="/forgot-password" exact element={<ForgotPass />} />
      <Route path="/reset-password" exact element={<ResetPass />} />
      <Route path="/signup" exact element={<SignUp />} />
    </Routes>
  </Router>
);

const App = () => {
  return <div>{routes}</div>;
};

export default App;
