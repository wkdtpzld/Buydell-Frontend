import { isLoggedInVar } from "../apollo"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "../pages/login";
import { CreateAccount } from "../pages/create-account";

export const LoggedOutRouter = () => {

  const onClick = () => {
    isLoggedInVar(true);
  }

  return (
    <Router>
      <Routes>
        <Route path="/create-account" element={<CreateAccount />}/>
        <Route path="/" element={<Login />}/>
      </Routes>
    </Router>
  )
}