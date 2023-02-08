import React, {useState} from "react";

import Button from "../../../components/Button/Button";

function UserAccess() {
  const [checkboxes, setCheckboxes] = useState([
        { id: 1, label: "Dashboards", value: "dashboards", isChecked: false },
        { id: 2, label: "Growth stats", value: "stats", isChecked: false },
        { id: 3, label: "Accounts", value: "accounts",isChecked: false },
        { id: 4, label: "Risk reviews", value: "riskReviews", isChecked: false },
        { id: 5, label: "Disputes", value: "disputes", isChecked: false },
        { id: 6, label: "Trial requests", value: "trialRequests", isChecked: false },
        { id: 7, label: "Purchases", value: "purchases", isChecked: false },
        { id: 8, label: "Referrals", value: "referrals", isChecked: false },
        { id: 9, label: "Waitlists", value: "waitlists", isChecked: false },
        { id: 10, label: "Commission withdrawals", value: "withdrawals", isChecked: false }
]);

    const handleCheckboxChange = (id) => {
      setCheckboxes(
        checkboxes.map((checkbox) => {
          if (checkbox.id === id) {
            checkbox.isChecked = !checkbox.isChecked;
          }
          return checkbox;
        })
      );
    };

  return (
    <div className="my-5">
       <div className="flex flex-col">
        {checkboxes.map((checkbox) => (
        <div className="flex justify-between mb-3">
          <label key={checkbox.id} className="ml-2 text-lg">{checkbox.label}</label>
          <input
          type="checkbox"
          checked={checkbox.isChecked}
          value={checkbox.value}
          onChange={() => handleCheckboxChange(checkbox.id)}
          />
        </div>
        ))};
      </div>
      <Button className="btn-primary w-full mt-3">Update</Button>
    </div>
  );
}

export default UserAccess;