import React from "react";

export default function Element({ label, value, children }) {
  return (
    <div className="w-1/2 pb-5">
      <h3 className="text-xs text-gray-700 font-bold">{label}</h3>
      {children && children !== null ? (
        children
      ) : (
        <h4 className="text-gray-700">{value}</h4>
      )}
    </div>
  );
}
