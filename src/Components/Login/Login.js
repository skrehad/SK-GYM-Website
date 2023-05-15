import React, { useContext } from "react";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import { toast } from "react-hot-toast";

const Login = () => {
  const { signInEmail, googleSingIn, githubSingIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const signIn = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    signInEmail(email, password)
      .then((result) => {
        const user = result.user;
        toast.success("Success Login");
        event.target.reset();
        navigate(from, { replace: true });
        console.log(user);
      })
      .catch((error) => {
        const errorMsg = error.message;
        toast.warning(errorMsg);
      });
  };

  const signInWithGoogle = () => {
    googleSingIn()
      .then((result) => {
        const user = result.user;
        toast.success("Success Login");
        navigate(from, { replace: true });
        console.log(user);
      })
      .catch((error) => {
        const errorMsg = error.message;
        toast.warning(errorMsg);
      });
  };

  const signInWithGithub = () => {
    githubSingIn()
      .then((result) => {
        const user = result.user;
        toast.success("Success Login");
        navigate(from, { replace: true });
        console.log(user);
      })
      .catch((error) => {
        const errorMsg = error.message;
        toast.warning(errorMsg);
      });
  };

  return (
    <div className=" hero login min-h-screen bg-base-200">
      <div className="flex-col mt-16">
        <div className=" lg:text-left ">
          <h1 className="text-4xl text-center mb-4 text-white font-bold ">
            Please Login now!
          </h1>
        </div>
        <div className="">
          <form
            onSubmit={signIn}
            className=" rounded-lg card-body flex-shrink-0 w-full max-w-sm  bg-base-100"
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter Your Password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <Link to="/register" className="label-text-alt link link-hover">
                  New User! Please Register First
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
        <div className="mt-4">
          <button onClick={signInWithGoogle} className="btn text-white mr-1">
            Login With Google
          </button>
          <button onClick={signInWithGithub} className="btn text-white">
            Login With Github
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
