import React from "react";

import Button from "../../../components/Button/Button";

function EditUser() {
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
      <Button className="btn-primary w-full mt-3"> Edit User</Button>
    </div>
  );
}

export default EditUser;
