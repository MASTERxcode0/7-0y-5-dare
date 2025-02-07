import React from "react";
import useDarcState from "../store/useDarc";

function DarkModeToggle() {
  const { darc, toggleDarc, setDarc } = useDarcState();

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen ${
        darc ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <h1 className="text-3xl font-bold mb-5">
        {darc ? "Let" : "Darc"}
      </h1>
      <div className="flex flex-col gap-4">
        <button
          onClick={toggleDarc}
          className="px-4 py-2 border  "
        >
         Dark Mode
        </button>
        
      </div>
    </div>
  );
}

export default DarkModeToggle;
