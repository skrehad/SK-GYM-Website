import React, { useContext } from "react";
import "./Register.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const { createUser, updateName, googleSingIn, githubSingIn } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const register = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    // console.log(name, email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        event.target.reset();
        navigate(from, { replace: true });
        displayName(name);
      })
      .catch((error) => {
        const errorMsg = error.message;
        toast.warning(errorMsg);
      });
  };

  const displayName = (name) => {
    updateName(name)
      .then(() => {})
      .catch((error) => {
        const errorMsg = error.message;
        toast.warning(errorMsg);
      });
  };

  const signInWithGoogle = () => {
    googleSingIn()
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
        toast.success("Success Register");
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
        toast.success("Success Register");
        console.log(user);
      })
      .catch((error) => {
        const errorMsg = error.message;
        toast.warning(errorMsg);
      });
  };
  return (
    <div className=" hero register min-h-screen bg-base-200">
      <div className="flex-col mt-16">
        <div className=" lg:text-left ">
          <h1 className="text-4xl text-info text-center mb-4 font-bold ">
            Please Register First
          </h1>
        </div>
        <ToastContainer />
        <div className="">
          <form
            onSubmit={register}
            className=" rounded-lg card-body flex-shrink-0 w-full max-w-sm  bg-base-200"
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                className="input input-bordered"
                required
              />
            </div>
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
                <Link to="/login" className="label-text-alt link link-hover">
                  You Have Already anAccount?
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

export default Register;
