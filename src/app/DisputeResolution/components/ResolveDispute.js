import React, {useState} from "react";
import Button from "../../../components/Button/Button";


function ResolveDispute() {
    const [selectedOption, setSelectedOption] = useState("");

    function handleOptionChange(event) {
        setSelectedOption(event.target.value);
      }
      
  return (
    <div className="my-5">
        <div className="flex justify-between">
            <label className="ml-2 text-lg">Customer</label>
            <input
            type="radio"
            value="customer"
            checked={selectedOption === "customer"}
            onChange={handleOptionChange}
            />
        </div>

        <div className="flex justify-between mt-4">
            <label className="ml-2 text-lg">Tradesperson</label>
            <input
            type="radio"
            value="tradesperson"
            checked={selectedOption === "tradesperson"}
            onChange={handleOptionChange}
            />
        </div>
        <Button className="btn-primary w-full mt-3"> Resolve</Button>
    </div>
  );
}

export default ResolveDispute;