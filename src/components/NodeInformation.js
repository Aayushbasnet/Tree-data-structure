import React, { useEffect, useState } from "react";

export default function NodeInformation(probs) {
  const [nodePath, setNodePath] = useState("");
  // const path = probs.searchPathObject.traversePath(nodeInfo.id);

  useEffect(() => {
    setNodePath(probs.searchPathObject.traversePath(probs.nodeInformation?.id));
    // console.log(nodePath);
  }, [probs.nodeInformation]);

  return (
    <>
      <div>
        <div style={{fontFamily: "'Cinzel', serif", fontSize:'40px'}}>Node Information</div>
        <>
          <p> <span style={{
            fontSize:'22px',
          }}> Label </span> <span style={{borderBottom:'1px solid gray', display:'block'}}>{probs.nodeInformation?.label}</span></p>
          <p><span style={{
            fontSize:'22px',
          }}> Description </span> <span style={{borderBottom:'1px solid gray', display:'block'}}>{probs.nodeInformation?.description}</span></p>
          <p><span style={{
            fontSize:'22px',
          }}> Node or Leaf ?</span><span style={{borderBottom:'1px solid gray', display:'block'}}>{probs.nodeInformation ? probs.nodeInformation?.isLeaf?"LEAF": "NODE" : ""}</span></p>
        </>
      </div>
      <div><span style={{
            fontSize:'22px',
            paddingBottom:'50px'
          }}> Path: </span> 
            <div style={{borderBottom:'1px solid gray'}}>
              {nodePath ? nodePath : "None"}
            </div>
      </div>
      {/* {path ? <div>Path: {path}</div> : <div>Path : none</div>} */}
    </>
  );
}
