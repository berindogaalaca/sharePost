import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import ForgotPassword from "./pages/ForgotPassword";
import HomePage from "./pages/HomePage"
import Profile from "./pages/Profile";
import Instagram from "./pages/Instagram";
import Twitter from "./pages/Twitter";
import Linkedin from "./pages/Linkedin";
import { UserProfileProvider } from "./pages/UserProfileContext.jsx"
import Facebook from "./pages/Facebook.jsx";


function App() {
  return (
    <BrowserRouter>
      <UserProfileProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/instagram" element={<Instagram />} />
        <Route path="/twitter" element={<Twitter />} />
        <Route path="/linkedin" element={<Linkedin />} />
        <Route path="/facebook" element={<Facebook />} />
      </Routes>
      </UserProfileProvider>
    </BrowserRouter>
  );
}

export default App;
