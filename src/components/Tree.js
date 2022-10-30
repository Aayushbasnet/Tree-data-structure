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
  
  const nodeHighlighter = (nodes, data)=>{
    nodes.forEach(node =>{
      node.style.backgroundColor='white';
      // console.log("key is : ", node.dataset.key);
      if(node.dataset.key == data){
        // console.log("id", node.dataset.key);
        node.style.backgroundColor = '#98A8F8';
      }
    });
  };
  const nodeDetails = (data) => (e) => {
    setNodeInformation(data);
    setLeafStatus(data.isLeaf);
    console.log(data.id);
    const nodes = document.querySelectorAll('.nodes');
    nodeHighlighter(nodes, data.id);
  };

  const toggleTreeChildren = () => {
    setIsVisible(!isVisible);
  };
  return (
    <>
      <div onClick={toggleTreeChildren}>
        {isVisible ? <CaretUpOutlined /> : <CaretDownOutlined />}

      </div>
      {isVisible ? (
        data.map((child) => {
          return (
            <div key={child.id}>
              <div
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
                    data-key={child.id}
                    className="btn btn-light nodeButton nodes"
                    onClick={nodeDetails(child)}
                  >
                    
                    <FolderOutlined />
                    <span style={{ paddingLeft: "10px" }} data-index>
                      {child.label}
                    </span>
                  </button>
                ) : (
                  <button
                    data-key={child.id}
                    className="btn btn-light leafButton nodes"
                    onClick={nodeDetails(child)}
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
            </div>
          );
        })
      ) : (
        <></>
      )}
    </>
  );
}


// export default function Tree({data, setNodeInformation, setLeafStatus}) {
//   const [isVisible, setIsVisible] = useState(true);
//   const [label, setLabel] = useState('open');
//   const [treeData, setTreeData] = useState(data);
//   console.log("data: ",data);
//   console.log("treeData: ",treeData);


  
//   const nodeDetails = (data) => (e) => {
//     setNodeInformation(data);
//     setLeafStatus(data.isLeaf);
//     setLabel(data.label);  
//   };

//   const toggleTreeChildren = () => {
//     setIsVisible(!isVisible);
//   };
//   return (
//     <>
//       <div onClick={toggleTreeChildren}>
//         {/* {!isVisible ? <CaretDownOutlined /> : <CaretUpOutlined />} */}
//         {isVisible ? label : "close"}
//       </div>
//       {isVisible ? (
//         data.map((child) => {
//           console.log("Map: ", child);
//           return (
//             <div key={child.id}>
//               <div
//                 key={child.id}
//                 className="verticalLine"
//                 style={{
//                   marginLeft: "20px",
//                   textAlign: "start",
//                   cursor: "pointer",
//                   borderLeft: '1px solid #aaaa'
//                 }}
//               >
//                 {!child.isLeaf ? (
//                   <button
//                     className="btn btn-light nodeButton"
//                     key={child.id}
//                     onClick={nodeDetails(child)}
//                     style={{
//                       borderBottom: '1px solid red'
//                     }}
//                   >
                    
//                     <FolderOutlined />
//                     <span style={{ paddingLeft: "10px" }}>
//                       {child.label}
//                     </span>
//                   </button>
//                 ) : (
//                   <button
//                     className="btn btn-light leafButton"
//                     key={child.id}
//                     onClick={nodeDetails(child)}
                    
//                     style={{
//                       borderBottom: '1px solid red'
//                     }}
//                   >
                    
//                     <FileOutlined />
//                     <span style={{ 
//                       paddingLeft: "15px",
//                       }}>
//                       {child.label}
//                     </span>
//                   </button>
//                 )}
//                 <Tree data={child.children} setNodeInformation={setNodeInformation} setLeafStatus={setLeafStatus} />
//               </div>
//             </div>
//           );
//         })
//       ) : (
//         <></>
//       )}
//     </>
//   );
// }



