import React, { useState } from "react";

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Button from "../../../components/Button/Button";

function ChangePassword() {
  // password handling
  const [passwordShown, setPasswordShown] = useState(false);

  return (
    <div className="my-5">
        {/* new password */}
        <div className="relative mt-4 mb-3">
                <span
                className="text-gray absolute cursor-pointer right-4 mt-4 ml-5"
                onClick={() => setPasswordShown(!passwordShown)}
                >
                {passwordShown ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </span>

                <input
                className="auth-input"
                type={passwordShown ? "text" : "password"}
                placeholder="New Password"
                autoComplete="off"
                />
        </div>
        {/* confirm password */}
        <div className="relative mt-4 mb-3">
                <span
                className="text-gray absolute cursor-pointer right-4 mt-4 ml-5"
                onClick={() => setPasswordShown(!passwordShown)}
                >
                {passwordShown ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </span>

                <input
                className="auth-input"
                type={passwordShown ? "text" : "password"}
                placeholder="Confirm New Password"
                autoComplete="off"
                />
        </div>
      <Button className="btn-primary w-full">Change Password</Button>
    </div>
  );
}

export default ChangePassword;
