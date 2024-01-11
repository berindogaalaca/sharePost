import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import ForgetPassword from "./pages/ForgetPassword";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/ForgetPassword" element={<ForgetPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
