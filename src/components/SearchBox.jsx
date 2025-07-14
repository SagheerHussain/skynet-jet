import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBox = () => {
  return (
    <div className="hidden sm:flex items-center w-full max-w-md bg-white/10 border-2 border-white/20 rounded-full px-4 py-2 shadow-[0_0_20px_rgba(255,255,255,0.25),0_0_40px_rgba(255,255,255,0.05)] backdrop-blur-sm">
      {/* Input */}
      <input
        type="text"
        placeholder="search anything"
        className="flex-grow bg-transparent outline-none text-white placeholder-white/70"
      />

      {/* Button */}
      <button className="w-8 h-8 flex items-center justify-center rounded-full bg-[#ff8a41] hover:bg-[#ff8a41]/80 transition">
        <FaSearch className="text-white" />
      </button>
    </div>
  );
}

export default SearchBox;
