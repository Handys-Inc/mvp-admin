import React, {useState} from "react";
import Button from "../../../components/Button/Button";


function UpdateAccountStatus() {
    const [selectedOption, setSelectedOption] = useState("");

    function handleOptionChange(event) {
        setSelectedOption(event.target.value);
      }
      
  return (
    <div className="my-5">
        <div className="flex justify-between">
            <label className="ml-2 text-lg">Active</label>
            <input
            type="radio"
            value="active"
            checked={selectedOption === "active"}
            onChange={handleOptionChange}
            />
        </div>

        <div className="flex justify-between mt-4">
            <label className="ml-2 text-lg">Suspended</label>
            <input
            type="radio"
            value="suspended"
            checked={selectedOption === "suspended"}
            onChange={handleOptionChange}
            />
        </div>
        <Button className="btn-primary w-full mt-3"> Update account</Button>
    </div>
  );
}

export default UpdateAccountStatus;