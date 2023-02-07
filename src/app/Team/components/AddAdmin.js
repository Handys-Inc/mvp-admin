import React, { useState } from "react";

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Button from "../../../components/Button/Button";

function AddAdmin() {
  // password handling
  const [passwordShown, setPasswordShown] = useState(false);

  return (
    <div className="my-5">
        <div className="flex relative mt-5 mb-3 gap-4">
            <input
            className="auth-input"
            type={"text"}
            placeholder="First name"
            autoComplete="off"
            />
            <input
            className="auth-input"
            type={"text"}
            placeholder="Last name"
            autoComplete="off"
            />
        </div>
        <div className="flex relative mt-5 mb-2">
            <input
            className="auth-input"
            type={"email"}
            placeholder="Email address"
            autoComplete="off"
            />
        </div>
        <div className="flex gap-4">
            {/* create password */}
            <div className="relative mt-4 mb-3 w-1/2">
                <span
                className="text-gray absolute cursor-pointer right-4 mt-4 ml-5"
                onClick={() => setPasswordShown(!passwordShown)}
                >
                {passwordShown ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </span>

                <input
                className="auth-input"
                type={passwordShown ? "text" : "password"}
                placeholder="Create Password"
                autoComplete="off"
                />
            </div>
            {/* confirm password */}
            <div className="relative mt-4 mb-3 w-1/2">
                <span
                className="text-gray absolute cursor-pointer right-4 mt-4 ml-5"
                onClick={() => setPasswordShown(!passwordShown)}
                >
                {passwordShown ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </span>

                <input
                className="auth-input"
                type={passwordShown ? "text" : "password"}
                placeholder="Confirm Password"
                autoComplete="off"
                />
            </div>

        </div>
      <Button className="btn-primary w-full"> Create User</Button>
    </div>
  );
}

export default AddAdmin;
