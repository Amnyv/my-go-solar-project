import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route,Routes} from "react-router-dom";
import Login from "./components/main/login";
import Admin from './components/admin';
import User from './components/user';
import Main from './components/main';
import AdminProfile from './components/main/resetPassword';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route element ={<Admin/>} path ="admin"></Route>
         <Route  element = {<AdminProfile/>} path = "profile">
         </Route>
      <Route element ={<Main/>} path ="main"></Route>
      <Route element ={<User/>} path ="user"></Route>
      {/* <Route element = {<Login />} path ="/login"></Route> */}
      </Routes>
    </BrowserRouter>
  );
}
export default App;
