import React, { useContext } from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const logout = () => {
    logOut()
      .then(() => {})
      .catch(() => {});
  };

  const menuItems = (
    <>
      <li>
        <NavLink
          to="/"
          className="block sm:py-1 mx-4  text-white ({ isActive, isPending }) =>
    isPending ? 'pending' : isActive ? 'active' : '' "
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className="block mx-4 sm:py-1  text-white ({ isActive, isPending }) =>
    isPending ? 'pending' : isActive ? 'active' : '' "
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/gallery"
          className="block mx-4 sm:py-1  text-white ({ isActive, isPending }) =>
    isPending ? 'pending' : isActive ? 'active' : '' "
        >
          Gallery
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/schedule"
          className="block mx-4 sm:py-1  text-white ({ isActive, isPending }) =>
    isPending ? 'pending' : isActive ? 'active' : '' "
        >
          Schedule
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blog"
          className="block mx-4 sm:py-1  text-white ({ isActive, isPending }) =>
    isPending ? 'pending' : isActive ? 'active' : '' "
        >
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/pricing"
          className="block mx-4 sm:py-1  text-white ({ isActive, isPending }) =>
    isPending ? 'pending' : isActive ? 'active' : '' "
        >
          Pricing
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/classes"
          className="block mx-4 sm:py-1  text-white ({ isActive, isPending }) =>
    isPending ? 'pending' : isActive ? 'active' : '' "
        >
          Classes
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className="block mx-4 sm:py-1   text-white ({ isActive, isPending }) =>
    isPending ? 'pending' : isActive ? 'active' : '' "
        >
          Contact
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-gray-900 lg:px-8 sticky top-0 z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="mt-4 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/" className="ml-2 text-white normal-case text-xl">
          SK GYM
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="nav-menu menu-horizontal px-1">{menuItems}</ul>
      </div>
      <div className="nav-menu navbar-end">
        {user && user.uid ? (
          <button onClick={logout} className="mr-4">
            LogOut
          </button>
        ) : (
          <ul className="flex mx-4 ">
            <li className="">
              <NavLink
                to="/register"
                className="block sm:py-1 lg:mx-4 mx-1  text-white ({ isActive, isPending }) =>
                isPending ? 'pending' : isActive ? 'active' : '' "
              >
                Register
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                className="block sm:py-1  pl-3  text-white ({ isActive, isPending }) =>
                isPending ? 'pending' : isActive ? 'active' : '' "
              >
                Login
              </NavLink>
            </li>
          </ul>
        )}

        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              {user && user.photoURL ? (
                <img src={user.photoURL} alt="" />
              ) : (
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_g_7YVzERozXI_mfnbSPkggiXqlljwtCQXw&usqp=CAU"
                  alt=""
                />
              )}
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <p className="justify-between text-white">{user?.displayName}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
