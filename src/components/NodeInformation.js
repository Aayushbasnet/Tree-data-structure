import React, { useEffect, useState } from "react";

export default function NodeInformation(probs) {
  const [nodePath, setNodePath] = useState("");
  // const path = probs.searchPathObject.traversePath(nodeInfo.id);

  useEffect(() => {
    setNodePath(probs.searchPathObject.traversePath(probs.nodeInformation?.id));
    console.log(nodePath);
  }, [probs.nodeInformation]);

  return (
    <>
      <div>
        <h1>NodeInformation</h1>
        <>
          <p> <span style={{
            fontSize:'22px',
          }}> Label: </span> <div style={{borderBottom:'1px solid gray'}}>{probs.nodeInformation?.label}</div></p>
          <p><span style={{
            fontSize:'22px',
          }}> Description: </span> <div style={{borderBottom:'1px solid gray'}}>{probs.nodeInformation?.description}</div></p>
          <p><span style={{
            fontSize:'22px',
          }}> Node or Leaf: </span><div style={{borderBottom:'1px solid gray'}}>{probs.nodeInformation? probs.nodeInformation?.isLeaf?"Is leaf.": "Is node" : ""}</div></p>
        </>
      </div>
      <div><span style={{
            fontSize:'22px',
            paddingBottom:'50px'
          }}> Path: </span> <div style={{borderBottom:'1px solid gray'}}>{nodePath ? nodePath : "None"}</div></div>
      {/* {path ? <div>Path: {path}</div> : <div>Path : none</div>} */}
    </>
  );
}
