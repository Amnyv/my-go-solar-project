import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./components/main/login";
import Admin from "./components/admin";
import User from "./components/user";
import Main from "./components/main";
import Seller from "./components/seller";
import AdminProfile from "./components/main/resetPassword";
import Header from "./components/main/header";
import Signup from "./components/main/signup";
import Chat from "./components/user/chat";
import AddExpert from "./components/admin/addexpert";
import Expertlogin from "./components/main/expertlogin";
import Expertchat from "./components/expert/expertchat";
import Expert from "./components/expert";
import Home from "./components/main/home";
import Sellersignup from "./components/main/sellersignup";
import Sellerlogin from "./components/main/sellerlogin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Admin />} path="admin">
          <Route element={<AdminProfile />} path="profile" />
          <Route element={<AddExpert />} path="addexpert" />
        </Route>

        <Route element={<User />} path="user">
          <Route element={<Chat />} path="chat" />
        </Route>
        <Route element={<Main />} path="main">
          <Route element={<Signup/>} path="signup" />
          <Route element={<Login />} path="login" />
          <Route element={<Main />} path="home" />
          <Route element={<Expertlogin />} path="expertlogin" />
          <Route element={<Expert />} path="expert"></Route>
</Route>
          <Route element={<Seller/>} path="seller">
          <Route element={<Sellersignup/>} path="signup" />
          <Route element={<Sellerlogin/>} path="login" />
          </Route>



          <Route element={<Expertchat />} path="expertchat" />
     
        <Route element={<User />} path="user"></Route>

        <Route element={<Navigate to="/main/home" />} path="/"></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
