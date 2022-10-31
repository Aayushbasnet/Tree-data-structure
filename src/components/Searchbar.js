import Search from "antd/lib/transfer/search";
import React, { useState } from "react";

export default function Searchbar(probs) {
  const [searchData, setSearchData] = useState('');
  const searchNode = ()=>{
    console.log("searchData", searchData);
    const data = probs.nodeObject.search(searchData);
    console.log("Data", data);
    if(data.length){
      console.log("data", data)
      probs.setSearchInformation(probs.nodeObject.search(searchData));
    }else{
      alert("Node not found");
    }
  }
  return (
    <>
    <h1>Data structure Tree</h1>
      <input
        type="search"
        placeholder="Search node.."
        style={{
          width: "30%",
          outline: 'none'
        }}
        onChange={(e) => {
          setSearchData(e.target.value);
        }}
      />
      <button
        type="button"
        onClick={searchNode}
        style={{
          width: "7%",
          border: "1px solid #aaaa",
          borderRadius: "4px",
        }}
      >
        search
      </button>
    </>
  );
}
