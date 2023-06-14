import React from "react";

const CustomTooltip = ({ text, children }) => {
  return (
    <div className="group relative m-2 flex justify-center">
      {children}
      <span className="absolute top-5 scale-0 transition-fade rounded bg-gray-800 p-2 inline-block min-w-[170px] text-xs text-white group-hover:scale-100">
        {text}
      </span>
    </div>
  );
};

export default CustomTooltip;


