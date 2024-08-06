import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "./components/Navbar";
import Home from "./pages/Home";
import Form from "./pages/Form";
// eslint-disable-next-line no-unused-vars
import Checkout from "./pages/Checkout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sigin from "./pages/Sigin";
import Registration from "./pages/Registration";
import ForgotPassword from "./pages/ForgotPassword";
import CheckStatus from "./pages/CheckStatus";
import Footer from "./components/Footer";
import ApplicationDetailsPage from "./pages/ApplicationDetailsPage";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/form" element={<Form />} />
          <Route exact path="/signin" element={<Sigin />} />
          <Route exact path="/registration" element={<Registration />} />
          <Route exact path="/forgot-password" element={<ForgotPassword />} />
          <Route exact path="/checkstatus" element={<CheckStatus />} />
          <Route
            path="/application-details"
            element={<ApplicationDetailsPage />}
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
