import React, { useEffect, useState } from "react";

export default function NodeForm(probs) {
  const [label, setLabel] = useState("");
  const [description, setDescription] = useState("");
  const [submitStatus, setSubmitStatus] = useState(false);
  
  const addData = () => {
    console.log("form probs: ", probs);
    const parentData = probs. nodeInformation;
    const leafStatus = probs.leafStatus;
    // console.log(parentData);
    if(!parentData){
      alert("Please select a parent");
    }else{
      if (leafStatus) {
        return alert("Cannot add in leaf");
      } else {
        console.log(label, description, parentData.id, probs.nodeStatus);
        probs.nodeObject.add(label, description, parentData.id, probs.nodeStatus);
        probs.setRenderTree(label);
        alert("Successfully added");
      };
    };
  };

  return (
    <>
      <div style={{fontFamily: "'Cinzel', serif", fontSize:'40px'}}>Fill {probs.nodeStatus ? "Leaf" : "Node"} details</div>
      <p>Selected parent is : 
        <span style={{
          fontSize:'24px',
          marginLeft:'10px'
        }}>
          {probs. nodeInformation ? probs. nodeInformation.label : "None"}
        </span>
      </p>
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
