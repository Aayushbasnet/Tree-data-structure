import React, { useEffect, useState} from "react";
import Searchbar from "./Searchbar";
import Addbutton from "./Addbutton";
import NodeInformation from "./NodeInformation";
import Tree from "./Tree";
import { TreeStructure } from "../classBluePrint";
import SearchResult from "./SearchResult";
import './css/Layout.css';

export default function Layout() {
  const [newTreeStructure, setNewTreeStructure] = useState(new TreeStructure());
  const [nodeInformation, setNodeInformation] = useState();
  const [searchInformation, setSearchInformation] = useState([]);
  const [leafStatus, setLeafStatus] = useState();
  const [renderTree, setRenderTree] = useState("");
  

  const [dummyData, setDummyData] = useState(newTreeStructure.queue);
  useEffect(()=>{
    setDummyData(newTreeStructure.queue);
    console.log("RenderTree in layout: ",renderTree);
  },[renderTree]);

  // const dummyData = newTreeStructure.queue;
  console.log("dummydata: ",dummyData);
  // newTreeStructure.add("A", "This is child node", 1);
  // const dummyData = JSON.parse(localStorage.getItem('nodeDetail'));
  // [
  //     {
  //         id: 1,
  //         label: 'xyz',
  //         description: 'test 1',
  //         children: [
  //             {
  //                 id: 2,
  //                 label: 'abc',
  //                 description: 'test 2',
  //                 children: [],
  //                 isChildren: true
  //             },
  //             {
  //                 id: 3,
  //                 label: 'qwe',
  //                 description: 'test 3',
  //                 children: [],
  //                 isChildren: true
  //             }
  //         ],
  //             isChildren: true
  //     },
  //     {
  //         id: 4,
  //         label: 'haha',
  //         description: 'test 4',
  //         children:[],
  //         isChildren: true
  //     }

  // ];
  return (
    <div className="container-fluid layout">
      {/* searchbar */}
      <form>
        <div className="row mb-5 p-3 border-bottom d-flex flex-row justify-content-center shadow-sm">
          <Searchbar 
            nodeObject={newTreeStructure} 
            setSearchInformation={setSearchInformation}
            />
        </div>
      </form>
      {/* main section */}
      <div className="row m-2">
        {/* left tree structure */}
        <div className="col-sm-5 mx-5 py-5 shadow">
          <Tree
            data={dummyData}
            // treeData={treeData}
            setNodeInformation={setNodeInformation}
            setLeafStatus={setLeafStatus}
          />
        </div>
        {/* right section */}
        <div
          className="col-sm-6 shadow p-5"
          style={{
            borderLeft: "1px solid #aaaa",
            height: "100%",
          }}
        >
          {/* Information section */}
          <div className="row pt-2">
            <NodeInformation
              searchPathObject={newTreeStructure}
              nodeInformation={nodeInformation}
            />
          </div>
          {/* Add button section */}
          <div className="row mt-5">
            <Addbutton
              nodeObject={newTreeStructure}
              leafStatus={leafStatus}
              nodeInformation={nodeInformation}
              // dummyData={dummyData}
              setRenderTree={setRenderTree}
            />
          </div>
        </div>
        {/* Display search result */}
        <div className="row my-5 p-3 border-bottom d-flex flex-row justify-content-center shadow-sm">
          <h1>Search Result</h1>
          <SearchResult
              searchInformation={searchInformation}
            />
        </div>
      </div>
          
    </div>
  );
}
