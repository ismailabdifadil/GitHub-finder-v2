import { Route, Router, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import AboutPage from "./pages/AboutPage";
import Footer from "./components/layout/Footer";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import "./spinner.css";
import GithubProvider from "./context/Github/GithubContext";
import AlertProvider from "./context/Alert/AlertContext";
import Alert from "./components/layout/Alert";
import UserProfile from "./pages/UserProfile";

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <div className="flex flex-col justify-between h-screen">
          <Navbar />
          <main className="container mx-auto">
            <Alert />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/user/:login" element={<UserProfile />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
