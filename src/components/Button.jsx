import React from "react";

function Button(props) {
  const { children, onClick } = props;
  return (
    <div
      onClick={onClick}
      className="border rounded-2xl bg-amber-100 max-w-[150px] px-2 py-4 flex justify-center items-center hover:bg-amber-200 transition-all"
    >
      {children}
    </div>
  );
}

export default Button;
