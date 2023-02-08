import React from "react";

import Button from "../../../components/Button/Button";
import Exclamation from "../../../assets/icons/exclamation.svg";

function DeleteUser() {
  return (
    <div className="my-5">
        <div className="flex justify-center mb-3">
          <img className="w-14 text-primary" src={Exclamation} alt="exclamation"/>
        </div>
        
        <h3 className="text-lg">Are you sure you want to delete?</h3>
        <p className="text-sm text-gray">You won’t be able to revert this</p>
        <div className="flex relative mt-5 mb-3 gap-4">
            <Button className="btn-primary w-full">Yes, delete it</Button>
            <Button className="btn-white w-full">Cancel</Button>
        </div>
    </div>
  );
}

export default DeleteUser;
