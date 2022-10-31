import React from "react";

export default function SearchResult(props) {
  // if(props.searchInformation.length){
  //   console.log(props);
  //   console.log(props);
  //   props.searchInformation.map((result)=>{
  //     console.log(result);
  //   });
  // }else{
  //   console.log("empty")
  // }
  return (
    <div>
      <div>
        <table class="table table-striped">
          <thead>
            <tr>
              {/* <th scope="col">#</th> */}
              <th scope="col">ID</th>
              <th scope="col">LABEL</th>
              <th scope="col">DESCRIPTION</th>
              <th scope="col">PARENT ID</th>
              {/* <th scope="col">Description</th> */}
            </tr>
          </thead>
          <tbody>
          {props.searchInformation.length
            ? props.searchInformation.map((result) => {
              {console.log(result)}
                  return(
                    <tr>
                      <th scope="row">{result.id}</th>
                      <td>{result.label}</td>
                      <td>{result.description}</td>
                      <td>{result.parentId}</td>
                    </tr>

                  )
              })
              : ""}
          </tbody>
        </table>
      </div>
      {/* <div>
        <div style={{fontFamily: "'Cinzel', serif", fontSize:'40px'}}>Search Result</div>
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
      </div> */}
    </div>
  );
}
