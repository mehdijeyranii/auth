import { Route, Routes } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useState } from "react";

function App() {
  const [email, setEmail] = useState<string>("");

  const getLoggedInEmail = (email: string) => {
    setEmail(email);
  };
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout email={email}>
              <Home />
            </MainLayout>
          }
        />
        <Route
          path="/blog"
          element={
            <MainLayout email={email}>
              <Blog />
            </MainLayout>
          }
        />
        <Route
          path="/about"
          element={
            <MainLayout email={email}>
              <About />
            </MainLayout>
          }
        />
        <Route
          path="/contact-us"
          element={
            <MainLayout email={email}>
              <Contact />
            </MainLayout>
          }
        />
        <Route
          path="/dashboard"
          element={
            <MainLayout email={email}>
              <Dashboard />
            </MainLayout>
          }
        />
        <Route path="/login" element={<Login getEmail={getLoggedInEmail} />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
