import React, {useState} from "react";
import Button from "../../../components/Button/Button";


function UpdateKYCStatus() {
    const [selectedOption, setSelectedOption] = useState("");

    function handleOptionChange(event) {
        setSelectedOption(event.target.value);
      }
      
  return (
    <div className="my-5">
        <div className="flex justify-between">
            <label className="ml-2 text-lg">Verified</label>
            <input
            type="radio"
            value="verified"
            checked={selectedOption === "verified"}
            onChange={handleOptionChange}
            />
        </div>

        <div className="flex justify-between mt-4">
            <label className="ml-2 text-lg">Unverified</label>
            <input
            type="radio"
            value="unverified"
            checked={selectedOption === "unverified"}
            onChange={handleOptionChange}
            />
        </div>
        <Button className="btn-primary w-full mt-3"> Update account</Button>
    </div>
  );
}

export default UpdateKYCStatus;