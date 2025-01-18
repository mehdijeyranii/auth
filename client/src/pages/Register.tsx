import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (response.ok) {
        alert(data.message);
        navigate("/login");
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error(`Error registering user: ${err}`);
    }
  };

  return (
    <div className="w-screen h-screen grid place-content-center">
      <div className="bg-gray-50/5 p-5 rounded-lg flex flex-col gap-5">
        <h2 className="text-2xl text-center">
          <span className="text-rose-400 font-bold">Create</span> Your Account
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            className="w-[400px] bg-gray-50/5 p-5"
            type="text"
            name="username"
            onChange={handleChange}
            placeholder="Username"
          />
          <input
            className="w-[400px] bg-gray-50/5 p-5"
            type="email"
            name="email"
            onChange={handleChange}
            placeholder="example@gmail.com"
          />
          <input
            className="w-[400px] bg-gray-50/5 p-5"
            type="password"
            name="password"
            onChange={handleChange}
            placeholder="Password"
          />
          <div className="flex justify-between items-center px-2">
            <Link to="/login">I have already registered</Link>
            <button className="px-5 py-2 bg-rose-500 rounded" type="submit">
              Register
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

export default Register;
