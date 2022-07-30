import { Routes, Route } from "react-router-dom"
import Home from "./pages/home/home"
import Login from "./pages/login/login"
import NotFound from "./pages/notPage";
import SignUp from "./pages/signup/signUp";
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Login />} path="/login" />
        <Route element={<NotFound />} path="*" />
        <Route element={<SignUp />} path="/signup" />
      </Routes>
    </>

  );
}

export default App;
