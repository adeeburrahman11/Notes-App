import React, { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import { Link, useNavigate } from "react-router-dom";
import PasswordInput from "../../components/Input/PasswordInput";
import { validateEmail } from "../../utils/help";
import axiosInstance from "../../utils/axiosInstance";
import { BASE_URL } from "../../utils/constants";

const ForgotPass = () => {
  const [email, setEmail] = React.useState("");
  const navigate = useNavigate();

  return (
    <>
      <NavBar />
      <div className="flex items-center justify-center mt-28">
        <div className="w-96 border rounded bg-white px-7 py-10">
          <form>
            <h4 className="text-2xl mb-7">Enter Email</h4>
            <input
              type="text"
              placeholder="yourname@email.com"
              className="input-box"
              onChange={(val) => setEmail(val.toLocalString())}
            />

            <button type="submit" className="btn-primary" onClick={() => {}}>
              Send reset link
            </button>
            <p className="text-sm text-center mt-4">
              <Link to="/login" className="font-medium text-primary underline">
                Remember Suddenly?
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgotPass;
