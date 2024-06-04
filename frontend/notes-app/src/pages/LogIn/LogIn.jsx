import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import { Link } from "react-router-dom";

const LogIn = () => {
  return (
    <>
      <NavBar />
      <div>
        <div>
          <form onSubmit={() => {}}>
            <h1 className="text-2xl mb-7">LogIn</h1>
            <input type="text" placeholder="Email" className="input-box" />
            <button type="submit" className="btn-primary">
              Login
            </button>
            <p className="text-sm text-center mt-4">
              Not registered yet?{""}
              <Link to="/signup" className="">
                Create an Account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default LogIn;
