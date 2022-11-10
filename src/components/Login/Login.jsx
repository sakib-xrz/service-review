import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import useTitle from "../../hooks/useTitle";

const Login = () => {
  useTitle("Log In");
  const { signIn, logInWithGoogle } = useContext(AuthContext);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const googleProvider = new GoogleAuthProvider();

  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        toast.success("Log In Successful", {
          style: { background: "#333", color: "#fff" },
        });

        const user = result.user;
        
        const currentUser = {
          email: user.email,
        };

        fetch("http://localhost:5000/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("token", data);
            navigate(from, { replace: true });
          });

        form.reset();
        setError("");
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    logInWithGoogle(googleProvider)
      .then((result) => {
        toast.success("Log In Successful", {
          style: { background: "#333", color: "#fff" },
        });
        const user = result.user;
        const currentUser = {
          email: user.email,
        };

        fetch("http://localhost:5000/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("token", data);
            navigate(from, { replace: true });
          });
        setError("");
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  return (
    <div className="w-11/12 md:w-7/12 lg:w-5/12 mx-auto my-8">
      <div>
        <div className="p-8 space-y-3 rounded-xl bg-transparent text-white border border-primary shadow-xl">
          <h1 className="text-2xl font-bold text-center">Login</h1>
          <form
            onSubmit={handleSignIn}
            noValidate=""
            action=""
            className="space-y-6 ng-untouched ng-pristine ng-valid"
          >
            <div className="space-y-1 text-sm">
              <label htmlFor="email" className="block">
                Email
              </label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="example@email.com"
                className="w-full px-4 py-3 rounded-md border border-gray-700 bg-secondary text-neutral"
                required
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="password" className="block">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="w-full px-4 py-3 rounded-md border border-gray-700 bg-secondary text-neutral"
                required
              />
              <div className="flex justify-end text-xs text-primary">
                <a rel="noopener noreferrer" href="/">
                  Forgot Password?
                </a>
              </div>
            </div>
            <small>
              <p className="text-error -mt-2">{error.split("Firebase:")}</p>
            </small>
            <button
              type="submit"
              className="block w-full p-3 text-center font-semibold rounded-md bg-primary text-[#1A1E1F] border border-primary "
            >
              Log in
            </button>
          </form>
          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
            <p className="px-3 text-sm">Login with social accounts</p>
            <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
          </div>
          <div className="w-full flex justify-center">
            <button
              onClick={handleGoogleSignIn}
              aria-label="Log in with Google"
              className="w-auto p-3 rounded-md flex items-center justify-center font-semibold text-lg lg:mr-2 bg-[#1A1E1F] border text-white mb-3 lg:mb-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-5 h-5 fill-current"
              >
                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
              </svg>
              <h3 className="ml-3">Log in with Google</h3>
            </button>
          </div>
          <p className="text-xs text-center sm:px-6">
            Don't have an account? <br />
            <Link
              rel="noopener noreferrer"
              to="/register"
              className="underline"
            >
              Register Now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
