import React from "react";
import PasswordInput from "../../components/Input/PasswordInput";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";

const ResetPass = () => {
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  return (
    <>
      <NavBar />
      <div className="flex items-center justify-center mt-28">
        <div className="w-96 border rounded bg-white px-7 py-10">
          <form>
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

            <button type="submit" className="btn-primary" onClick={() => {}}>
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
