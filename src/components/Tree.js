import React, { useEffect, useState } from "react";
import {
  CaretUpOutlined,
  CaretDownOutlined,
  FolderOutlined,
  FileOutlined,
} from "@ant-design/icons";
// import './css/Tree.css';

export default function Tree({data, setNodeInformation, setLeafStatus}) {
  const [isVisible, setIsVisible] = useState(false);
  
  const nodeDetails = (data) => (e) => {
    setNodeInformation(data);
    setLeafStatus(data.isLeaf);
  };

  const toggleTreeChildren = () => {
    setIsVisible(!isVisible);
  };
  return (
    <>
      <div onClick={toggleTreeChildren}>
        {!isVisible ? <CaretDownOutlined /> : <CaretUpOutlined />}

      </div>
      {isVisible ? (
        data.map((child, index) => {
          return (
            <>
              <div
                key={index}
                className="verticalLine"
                style={{
                  marginLeft: "20px",
                  textAlign: "start",
                  cursor: "pointer",
                  borderLeft: '1px solid #aaaa'
                }}
              >
                {!child.isLeaf ? (
                  <button
                    className="btn btn-light nodeButton"
                    key={child.id}
                    onClick={nodeDetails(child)}
                    style={{
                      borderBottom: '1px solid red'
                    }}
                  >
                    
                    <FolderOutlined />
                    <span style={{ paddingLeft: "10px" }}>
                      {child.label}
                    </span>
                  </button>
                ) : (
                  <button
                    className="btn btn-light leafButton"
                    key={child.id}
                    onClick={nodeDetails(child)}
                    style={{
                      borderBottom: '1px solid red'
                    }}
                  >
                    
                    <FileOutlined />
                    <span style={{ 
                      paddingLeft: "15px",
                      }}>
                      {child.label}
                    </span>
                  </button>
                )}
                
                <Tree data={child.children} setNodeInformation={setNodeInformation} setLeafStatus={setLeafStatus} />
              </div>
            </>
          );
        })
      ) : (
        <></>
      )}
    </>
  );
}
