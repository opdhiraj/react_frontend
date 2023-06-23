import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  }, []);

  const logout = () => {
    console.log("loggggout");
    localStorage.clear();
    navigate("/signup");
  };
  return (
    <div>
      <ul className="nav-ul">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/add">Add Product</Link>
        </li>

        <li>
          <Link to="/update">Update Product</Link>
        </li>

        <li>
          <Link to="/profile">profile</Link>
        </li>

        {auth ? (
          <li>
            <Link onClick={logout} to="/signup">
              Logout
            </Link>
          </li>
        ) : (
          <>
            <li>
              <Link to="/signup">SignUp</Link>
            </li>
            <li>
              <Link to="./login">Login</Link>
            </li>
          </>
        )}

        {/* <li>
          {auth ? (
            <Link onClick={logout} to="/signup">
              Logout
            </Link>
          ) : (
            <Link to="/signup">SignUp</Link>
          )}
        </li>
        <li>
          <Link to="./login">Login</Link>
        </li> */}
      </ul>
    </div>
  );
};

export default Nav;
