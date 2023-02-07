import React from "react";

import Button from "../../../components/Button/Button";

function DeleteUser() {
  return (
    <div className="my-5">
        <h3>Are you sure you want to delete?</h3>
        <p>You won’t be able to revert this</p>
        <div className="flex relative mt-5 mb-3 gap-4">
            <Button className="btn-primary w-full">Yes, delete it</Button>
            <Button className="btn-white w-full">Cancel</Button>
        </div>
    </div>
  );
}

export default DeleteUser;
