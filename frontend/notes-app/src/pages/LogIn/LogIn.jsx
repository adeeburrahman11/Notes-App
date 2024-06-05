import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import { Link } from "react-router-dom";
import PasswordInput from "../../components/Input/PasswordInput";

const LogIn = () => {
  return (
    <>
      <NavBar />
      <div className="flex items-center justify-center mt-28">
        <div className="w-96 border rounded bg-white px-7 py-10">
          <form onSubmit={() => {}}>
            <h1 className="text-2xl mb-7">LogIn</h1>
            <input type="text" placeholder="Email" className="input-box" />
            <PasswordInput />
            <button type="submit" className="btn-primary">
              Login
            </button>
            <p className="text-sm text-center mt-4">
              Not registered yet?{" "}
              <Link to="/signup" className="font-medium text-primary underline">
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
