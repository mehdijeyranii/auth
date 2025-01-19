import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

interface LoginType {
  getEmail: (email: string) => void;
}

const Login: React.FC<LoginType> = ({ getEmail }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleGetEmail = () => {
    getEmail(formData.email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log("FormData:", formData);

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        navigate("/dashboard");
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error(`Error logging in: ${err}`);
    }
  };
  return (
    <div className="w-screen h-screen grid place-content-center">
      <div className="bg-gray-50/5 p-5 rounded-lg flex flex-col gap-5">
        <h2 className="text-2xl text-center">
          <span className="text-rose-400 font-bold">Login</span> to Your Account
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            className="w-[400px] bg-gray-50/5 p-5"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@gmail.com"
          />
          <input
            className="w-[400px] bg-gray-50/5 p-5"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
          />
          <div className="flex justify-between items-center px-2">
            <Link to="/register">I don't have an account</Link>
            <button
              className="px-5 py-2 bg-rose-500 rounded"
              type="submit"
              onClick={handleGetEmail}
            >
              Login
            </button>
          </div>
        </form>
      </div>
      <Link to="/" className="absolute bottom-10 right-1/2 translate-x-1/2">
        Back to home
      </Link>
    </div>
  );
};

export default Login;
