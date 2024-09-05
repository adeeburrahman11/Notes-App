import React, { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";
import { BASE_URL } from "../../utils/constants";
import { validateEmail } from "../../utils/help";

const ForgotPass = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setError("Please enter email address.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    setSuccess("");

    try {
      const response = await axiosInstance.post("/forgot-password", { email });

      if (response.data.error) {
        setError(response.data.message);
        // setError("No account found with this email address.");
      } else {
        setSuccess("A password reset link has been sent to your email.");
        setTimeout(() => navigate("/login"), 5000); // Redirect after 5 seconds
      }
    } catch (err) {
      if (err.response && err.response.status === 400) {
        setError(err.response.data.message); // Capture 'User not found' message
      } else {
        setError("An error occurred. Please try again later.");
      }
    }
  };

  return (
    <>
      <NavBar />
      <div className="flex items-center justify-center mt-28">
        <div className="w-96 border rounded bg-white px-7 py-10">
          <form onSubmit={handleSubmit}>
            <h4 className="text-2xl mb-7">Enter Email</h4>
            <input
              type="email"
              placeholder="yourname@email.com"
              className="input-box"
              value={email}
              onChange={handleEmailChange}
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
            {success && <p className="text-green-500 text-sm">{success}</p>}
            <button type="submit" className="btn-primary">
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
