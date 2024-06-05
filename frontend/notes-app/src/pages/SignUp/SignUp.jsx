import React, { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSignup = async (a) => {
    e.preventDefault();
  };

  return (
    <>
      <NavBar />
      <div className="flex items-center justify-center mt-28">
        <div className="w-96 border rounded bg-white px-7 py-10">
          <form onSubmit={handleSignup}>
            <h4 className="text-2xl mb-7">SignUp</h4>

            <input
              type="text"
              placeholder="Email"
              className="input-box"
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
