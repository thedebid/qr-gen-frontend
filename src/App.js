import "./pages/login/Login.css";
import "./App.css";
import Login from "./pages/login/Login";
import UpdateAddress from "./pages/update-address/Update-address";
import ForgotPassword from "./pages/fpass/ForgotPassword";
import { ToastContainer } from "react-toastify";
import SetPass from "./pages/setpass/setPassword";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import Register from "./pages/register/Register";
import { QRGENContext } from "./context/context";
import { useContext } from "react";
import Main from "./pages/main/Main";
import GeneratedQR from "./components/GeneratedQR";
import VerifyEmail from "./pages/verifyemail/VerifyEmail";
import Scanned from "./pages/scanned/Sacnned";
function App() {
  const { user } = useContext(QRGENContext);
  return (
    <>
      {/* <BrowserRouter> */}
      <Routes>
        <Route path="/" element={<PrivateOutlet />}>
          <Route path="/" element={<Main />}>
            <Route path="dashboard" element={<UsersIndex />} />
            {/* <Route path=":id" element={<UserProfile />} /> */}
            <Route path="generatedqr" element={<GeneratedQR user={user} />} />
          </Route>
          <Route path="/update-address" element={<UpdateAddress />} />
        </Route>
        <Route path="/reset-password" element={<SetPass />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/scanned" element={<Scanned />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      {/* </BrowserRouter> */}
      <ToastContainer />
    </>
  );
}

function PrivateOutlet() {
  const auth = useAuth();
  return auth ? <Outlet /> : <Navigate to="/login" />;
}

const useAuth = () => {
  const { auth } = useContext(QRGENContext);
  // console.log(auth);
  return auth.isLoggedIn();
};

function UsersIndex() {
  return <div>sdvsd</div>;
}

export default App;
