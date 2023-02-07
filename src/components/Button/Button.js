import React from "react";

function Button({ className, onClick, children }) {
  return (
    <button className={`${className} rounded-full border-2 border-primary bg-primary text-white px-6 py-2`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
