import React, { useState } from "react";
import PasswordInput from "../../components/Input/PasswordInput";
import { Link, useLocation, useNavigate } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";

const ResetPass = () => {
  const [password, setPassword] = React.useState("");
  //   const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!password) {
      setError("Please enter the password.");
      return;
    }

    setError("");
    setSuccess("");

    //reset-api call
    try {
      const response = await axiosInstance.post(`${BASE_URL}/reset-password`, {
        token,
        newPassword: password,
      });

      if (response.data.success) {
        setSuccess("Your password has been reset successfully.");
        setTimeout(() => navigate("/login"), 3000); // Redirect after 3 seconds
      } else {
        setError("Failed to reset password. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <>
      <NavBar />
      <div className="flex items-center justify-center mt-28">
        <div className="w-96 border rounded bg-white px-7 py-10">
          <form onSubmit={handleSubmit}>
            <h4 className="text-2xl mb-7">Enter new password</h4>
            {/* <input
              type="text"
              placeholder="yourname@email.com"
              className="input-box"
              onChange={(val) => setPassword(val.toLocalString())}
            /> */}

            <PasswordInput
              value={password}
              placeholder={"New password"}
              onChange={(e) => setPassword(e.target.value)}
            />

            {error && <p className="text-red-500 text-sm">{error}</p>}
            {success && <p className="text-green-500 text-sm">{success}</p>}

            <button type="submit" className="btn-primary">
              Reset Password
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

export default ResetPass;
