import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/logo/logo.jpg";
import { AuthContext } from "../../context/AuthProvider";

const Header = () => {
  const { logOut, user } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const signOut = () => {
    logOut()
      .then(() => {
        toast.success("Logout successful", {
          style: { background: "#333", color: "#fff" },
        });
      })
      .catch((error) => {});
  };

  return (
    <div className="sticky top-0 z-50">
      <div className="shadow-md bg-base-100 h-[100px">
        <div className="py-5 mx-auto container px-5 xl:px-0">
          <div className="relative grid grid-cols-12">
            <div className="lg:col-span-3 col-span-7 flex justify-start items-center">
              <Link
                to="/"
                aria-label="Hamid Ali Photography"
                title="Hamid Ali Photography"
                className="inline-flex items-center"
              >
                <img className="h-[65px] w-auto" src={Logo} alt="" />
              </Link>
            </div>
            <ul className="col-span-6 justify-center items-center hidden space-x-8 lg:flex">
              <li>
                <NavLink
                  to="/home"
                  aria-label="Homepage"
                  title="Homepage"
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary font-medium tracking-wide transition-colors duration-200 hover:text-primary"
                      : "font-medium tracking-wide text-neutral transition-colors duration-200 hover:text-primary"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  aria-label="About"
                  title="About"
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary font-medium tracking-wide transition-colors duration-200 hover:text-primary"
                      : "font-medium tracking-wide text-neutral transition-colors duration-200 hover:text-primary"
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  aria-label="Services"
                  title="Services"
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary font-medium tracking-wide transition-colors duration-200 hover:text-primary"
                      : "font-medium tracking-wide text-neutral transition-colors duration-200 hover:text-primary"
                  }
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  aria-label="Blog"
                  title="Blog"
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary font-medium tracking-wide transition-colors duration-200 hover:text-primary"
                      : "font-medium tracking-wide text-neutral transition-colors duration-200 hover:text-primary"
                  }
                >
                  Blog
                </NavLink>
              </li>
              {user?.uid && (
                <>
                  <li>
                    <NavLink
                      to="/my-review"
                      aria-label="My Reviews"
                      title="My Reviews"
                      className={({ isActive }) =>
                        isActive
                          ? "text-primary font-medium tracking-wide transition-colors duration-200 hover:text-primary"
                          : "font-medium tracking-wide text-neutral transition-colors duration-200 hover:text-primary"
                      }
                    >
                      My Reviews
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/add-services"
                      aria-label="Add Services"
                      title="Add Services"
                      className={({ isActive }) =>
                        isActive
                          ? "text-primary font-medium tracking-wide transition-colors duration-200 hover:text-primary"
                          : "font-medium tracking-wide text-neutral transition-colors duration-200 hover:text-primary"
                      }
                    >
                      Add Services
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
            <ul className="col-span-3 justify-end items-center hidden space-x-8 lg:flex">
              {/* dark-mode toggle */}
              <div className="flex items-center">
                <label className="swap swap-rotate">
                  <input type="checkbox" />

                  <svg
                    className="swap-on fill-current w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                  </svg>

                  <svg
                    className="swap-off fill-current w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                  </svg>
                </label>
              </div>
              {user?.uid ? (
                <div className="flex items-center justify-end">
                  <h2 className="text-neutral font-medium text-sm md:text-lg">
                    {user?.displayName}
                  </h2>
                  <div className="dropdown dropdown-hover dropdown-end">
                    <label
                      tabIndex={0}
                      className="btn btn-ghost btn-circle border-2 border-primary avatar ml-2 hover:border-primary"
                    >
                      <div className="w-10 rounded-full">
                        {user?.photoURL ? (
                          <img alt="" src={user.photoURL} />
                        ) : (
                          <img
                            alt=""
                            src="https://i.ibb.co/VvZScTP/blank-avatar.png"
                          />
                        )}
                      </div>
                    </label>
                    <ul
                      tabIndex={0}
                      className="menu menu-compact dropdown-content p-2 shadow bg-base-100 border text-white rounded-md w-52"
                    >
                      <li>
                        <Link>Profile</Link>
                      </li>
                      <li>
                        <Link onClick={signOut}>Logout</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              ) : (
                <li>
                  <Link
                    to="/login"
                    className="inline-flex items-center justify-center h-12 px-6 font-semibold tracking-wide text-white transition duration-200 rounded border border-primary shadow-md bg-transparent hover:bg-primary hover:text-base-100"
                    aria-label="Appointment"
                    title="Appointment"
                  >
                    Log In
                  </Link>
                </li>
              )}
            </ul>

            {/* Mobile menu start here */}

            <div className="lg:hidden col-span-5 flex justify-end items-center">
              {user?.uid ? (
                <div className="dropdown dropdown-hover dropdown-end">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle border-2 border-primary avatar ml-2"
                  >
                    <div className="w-10 rounded-full">
                      {user?.photoURL ? (
                        <img alt="" src={user.photoURL} />
                      ) : (
                        <img
                          alt=""
                          src="https://i.ibb.co/VvZScTP/blank-avatar.png"
                        />
                      )}
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="menu menu-compact dropdown-content p-2 shadow bg-base-100 border text-white rounded-md w-52"
                  >
                    <li>
                      <Link>{user?.displayName}</Link>
                    </li>
                    <li>
                      <Link>Profile</Link>
                    </li>
                    <li>
                      <Link onClick={signOut}>Logout</Link>
                    </li>
                  </ul>
                </div>
              ) : (
                <></>
              )}
              <button
                aria-label="Open Menu"
                title="Open Menu"
                className="p-2 -mr-1 ml-4 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
                onClick={() => setIsMenuOpen(true)}
              >
                <svg className="w-5 text-light" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                  />
                </svg>
              </button>

              {isMenuOpen && (
                <div className="absolute top-0 left-0 w-full z-10">
                  <div className="p-5 bg-base-100 border rounded shadow-sm z-50">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <Link
                          to="/"
                          aria-label="Hamid Ali Photography"
                          title="Hamid Ali Photography"
                          className="inline-flex items-center"
                        >
                          <img className="w-[80px] h-auto" src={Logo} alt="" />
                        </Link>
                      </div>
                      <div className="flex">
                        <div className="flex items-center">
                          <label className="swap swap-rotate ml-3">
                            <input type="checkbox" />

                            <svg
                              className="swap-on fill-current w-5 h-5"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                            >
                              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                            </svg>

                            <svg
                              className="swap-off fill-current w-5 h-5"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                            >
                              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                            </svg>
                          </label>
                        </div>
                        <button
                          aria-label="Close Menu"
                          title="Close Menu"
                          className="flex justify-center items-center h-auto ml-3 p-2 -mr-2 transition duration-200 rounded"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <svg className="w-5 text-light" viewBox="0 0 24 24">
                            <path
                              fill="currentColor"
                              d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <nav>
                      <ul className="space-y-4">
                        <li>
                          <NavLink
                            to="/home"
                            aria-label="Homepage"
                            title="Homepage"
                            className={({ isActive }) =>
                              isActive
                                ? "font-medium tracking-wide text-primary transition-colors duration-200 hover:text-primary"
                                : "font-medium tracking-wide text-neutral transition-colors duration-200 hover:text-primary"
                            }
                          >
                            Home
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/about"
                            aria-label="About"
                            title="About"
                            className={({ isActive }) =>
                              isActive
                                ? "font-medium tracking-wide text-primary transition-colors duration-200 hover:text-primary"
                                : "font-medium tracking-wide text-neutral transition-colors duration-200 hover:text-primary"
                            }
                          >
                            About
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/services"
                            aria-label="Services"
                            title="Services"
                            className={({ isActive }) =>
                              isActive
                                ? "font-medium tracking-wide text-primary transition-colors duration-200 hover:text-primary"
                                : "font-medium tracking-wide text-neutral transition-colors duration-200 hover:text-primary"
                            }
                          >
                            Services
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/blog"
                            aria-label="Blog"
                            title="Blog"
                            className={({ isActive }) =>
                              isActive
                                ? "font-medium tracking-wide text-primary transition-colors duration-200 hover:text-primary"
                                : "font-medium tracking-wide text-neutral transition-colors duration-200 hover:text-primary"
                            }
                          >
                            Blog
                          </NavLink>
                        </li>
                        {user?.uid && (
                          <div className="space-y-4">
                            <li>
                              <NavLink
                                to="/my-review"
                                aria-label="My Reviews"
                                title="My Reviews"
                                className={({ isActive }) =>
                                  isActive
                                    ? "font-medium tracking-wide text-primary transition-colors duration-200 hover:text-primary"
                                    : "font-medium tracking-wide text-neutral transition-colors duration-200 hover:text-primary"
                                }
                              >
                                My Reviews
                              </NavLink>
                            </li>
                            <li>
                              <NavLink
                                to="/add-services"
                                aria-label="Add Services"
                                title="Add Services"
                                className={({ isActive }) =>
                                  isActive
                                    ? "font-medium tracking-wide text-primary transition-colors duration-200 hover:text-primary"
                                    : "font-medium tracking-wide text-neutral transition-colors duration-200 hover:text-primary"
                                }
                              >
                                Add Services
                              </NavLink>
                            </li>
                          </div>
                        )}
                        {user?.uid ? <></> : (
                          <li>
                            <Link
                              to="/login"
                              className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide transition duration-200 rounded shadow-md bg-transparent text-primary border border-primary hover:bg-primary hover:text-base-100"
                              aria-label="Appointment"
                              title="Appointment"
                            >
                              Log In
                            </Link>
                          </li>
                        )}
                      </ul>
                    </nav>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
