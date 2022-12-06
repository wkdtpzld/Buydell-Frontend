import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "../pages/login";
import { CreateAccount } from "../pages/create-account";

export const LoggedOutRouter = () => {

  return (
    <Router>
      <Routes>
        <Route path="/create-account" element={<CreateAccount />}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
    </Router>
  )
}