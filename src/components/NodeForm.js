import React, { useEffect, useState } from "react";

export default function NodeForm(probs) {
  const [label, setLabel] = useState("");
  const [description, setDescription] = useState("");
  const [submitStatus, setSubmitStatus] = useState(false);
  
  const addData = () => {
    console.log("sdfs", probs);
    const parentData = probs. nodeInformation;
    const leafStatus = probs.leafStatus;

    if (leafStatus) {
      return alert("Cannot add in leaf");
    } else {
      console.log(label, description, parentData.id, probs.nodeStatus);
      probs.nodeObject.add(label, description, parentData.id, probs.nodeStatus);
      alert("Successfully added");
    }
  };

  return (
    <>
      <h4 style={{fontFamily: "'Cinzel', serif"}}>Fill {probs.nodeStatus ? "Leaf" : "Node"} details</h4>
      <div>
        <form>
          {/* label */}
          <div className="form-group mb-3">
            <label
              htmlFor={probs.nodeStatus ? "leafLabel" : "nodeLabel"}
              style={{
                float: "left",
                marginBottom: "5px",
              }}
            >
              {probs.nodeStatus ? "Leaf" : "Node"} Label
            </label>
            <input
              type="text"
              className="form-control"
              id={probs.nodeStatus ? "leafLabel" : "nodeLabel"}
              placeholder="Enter label"
              onChange={(e) => {
                // setSubmitStatus(parentData.isLeaf);
                setLabel(e.target.value);
              }}
            />
          </div>

          {/* description */}
          <div className="form-group">
            <label
              htmlFor={probs.nodeStatus ? "leafDescription" : "nodeDescription"}
              style={{
                float: "left",
                marginBottom: "5px",
              }}
            >
              {probs.nodeStatus ? "Leaf" : "Node"} Description
            </label>
            <textarea
              rows="3"
              className="form-control"
              id={probs.nodeStatus ? "leafDescription" : "nodeDescription"}
              placeholder="Enter description"
              onChange={(e) => {
                // setSubmitStatus(parentData.isLeaf);
                setDescription(e.target.value);
              }}
            />
          </div>
          {/* submit button */}
          {label && description && !submitStatus ? (
            <div className="mt-3">
              <button
                type="button"
                onClick={addData}
                className="btn btn-primary"
              >
                Submit
              </button>
            </div>
          ) : (
            <div style={{color: "#b00e18"}}>Fill both value</div>
          )}
        </form>
      </div>
    </>
  );
}
