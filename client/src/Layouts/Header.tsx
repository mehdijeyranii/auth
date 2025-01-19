import { Link, NavLink } from "react-router-dom";

interface HeaderProps {
  email: string;
}

const Header: React.FC<HeaderProps> = ({ email }) => {
  return (
    <header className="flex justify-between items-center p-5 bg-gray-50/5">
      <div className="flex justify-start items-center gap-8">
        <span className="text-xl">
          Learn.<strong className="text-rose-500">FINISH</strong>
        </span>
        <div className="w-[1px] h-7 bg-gray-50"></div>
        <nav className="flex justify-start items-center gap-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-rose-500" : "text-white"
            }
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-rose-500" : "text-white"
            }
            to="/blog"
          >
            Blog
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-rose-500" : "text-white"
            }
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-rose-500" : "text-white"
            }
            to="/contact-us"
          >
            Contact
          </NavLink>
        </nav>
      </div>
      {email ? (
        <div>
          <span>
            Hello, <strong>{email}</strong>
          </span>
        </div>
      ) : (
        <div className="flex justify-end items-center gap-4">
          <Link
            to="/login"
            className="bg-transparent rounded-full px-4 py-2 transition-all duration-300 hover:bg-rose-500"
          >
            Sign in
          </Link>
          <Link
            to="/register"
            className="bg-transparent rounded-full px-4 py-2 transition-all duration-300 hover:bg-rose-500"
          >
            Sign up
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
