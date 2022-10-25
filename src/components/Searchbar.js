import React from "react";

export default function Searchbar() {
  return (
    <>
      <input
        type="search"
        placeholder="Search node.."
        style={{
          width: "30%",
          outline: 'none'
        }}
      />
      <button
        type="submit"
        style={{
          width: "5%",
          border: "1px solid #aaaa",
          borderRadius: "4px",
        }}
      >
        search
      </button>
    </>
  );
}
