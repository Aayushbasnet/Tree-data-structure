import React, { useState } from "react";
import NodeForm from "./NodeForm";

export default function (probs) {
  const [isLeaf, setIsLeaf] = useState(false);
  const toggleNodeStatus = (status) => (e) => {
    console.log("Clicked: ", status);
    status === "node" ? setIsLeaf(false) : setIsLeaf(true);
  };
  return (
    <>
      {/* Add button */}
      <div className="d-flex flex-row justify-content-center pb-5">
        <div className="mx-5">
          <button
            className="btn btn-success"
            onClick={toggleNodeStatus("node")}
          >
            Add Node
          </button>
        </div>
        <div className="mx-5">
          <button
            className="btn btn-success"
            onClick={toggleNodeStatus("leaf")}
          >
            Add Leaf
          </button>
        </div>
      </div>

      <div className="row mt-2 border-bottom pb-5">
        <NodeForm
          nodeStatus={isLeaf}
          nodeObject={probs.nodeObject}
          leafStatus={probs.leafStatus}
          nodeInformation={probs.nodeInformation}
          // dummyData={probs.dummyData}
          setRenderTree={probs.setRenderTree}
        />
      </div>
    </>
  );
}
