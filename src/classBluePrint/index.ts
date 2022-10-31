import { NodeInterface } from "./NodeInterface";

class Node implements NodeInterface {
  public id: number;
  public label: string;
  public description: string;
  public children: NodeInterface[];
  public isLeaf?: boolean;
  public parentId?: number;
  
  constructor(
    label: string,
    description: string,
    isLeaf: boolean,
    parentId: number | null
  ) {
    this.id = null;
    this.label = label;
    this.description = description;
    this.children = [];
    this.isLeaf = isLeaf;
    this.parentId = parentId;
  }
}

export class TreeStructure {
  public root: any;
  public queue: Array<Node> = [];
  public allNodeQueue: Array<Node> = [];
  public nodePath: string = "";
  public searchData:Array<Node>=[];
  public constructor() {
    this.root = null;
    this.add("Root", "This is a parent node", null, true);
  }

  add(
    label: string,
    description: string,
    parentId: number | null,
    isLeaf: boolean
  ) {
    const newNode = new Node(label, description, isLeaf, parentId);
    this.queue.push(newNode);
    this.allNodeQueue.push(newNode);
    // console.log(this.totalNodeLength);
    newNode.id = this.allNodeQueue.length;
    // console.log('newNode.id', newNode.id);
    if (parentId) {
      for (let i = 0; i < newNode.id; i++) {
        if (this.allNodeQueue[i].id === parentId) {
          this.allNodeQueue[i].children.push(newNode);
          // console.log("Before pop: ", this.totalNode);
          this.queue.pop();
          // console.log("After pop: ", this.totalNode);
          // console.log("New childern : ",[i+1],"--", this.totalNodeLength[i]);
          break;
        }
      }
    } else {
      newNode.isLeaf = false;
    }
    // for(let i=0; i < this.totalNode.length; i++){
    //     console.log("New root: ",this.totalNode[i]);
    // };
  };
  traversePath(ownId: number | null): string {
    this.nodePath = '';
    this.allNodeQueue.map((node) => {
      if (node.id === ownId) {
        this.traversePath(node.parentId);
        this.nodePath = this.nodePath + "/" + node.label;
        // console.log("nodepath: ", this.nodePath);
      }
    });
    return this.nodePath;
  };

  search(label: string | number){
    this.searchData=[];
    this.allNodeQueue.map(node=>{
      if(node.label==label){
        this.searchData.push(node);
        console.log("Search: ",node);
      }
    });
    return this.searchData;
  };
}
// const test = new TreeStructure();
// // console.log("Actual object before: ", test);

// test.add('abc', "test 1", null,false);s
// test.add('xyz', "test 2", 1,true);
// test.add('qwe', "test 3", 1, false);
// const searchx = test.search('xyz');
// console.log(searchx);
// // test.add('deep', "test 4", null);
// test.add('rabin', "test 4", 2, false);
// const val = test.traversePath(4);
// console.log(val);
// const x = test.traversePath(2);
// console.log("x:: ", x );
// console.log(test.nodePath);
// test.add('Aayush', "test 6", 2);
// const test = new TreeStructure();
// test.add('abc', "test 1", null);
// test.add('xyz', "test 2", 1);
// test.add('qwe', "test 3", 1);
// test.add('qwe', "test 4", null);
// test.add('qwe', "test 4", 2);
// console.log(test.totalNode);
// test.totalNodeLength.map((node)=>{
//     console.log("Node: ", node);
// })
// console.log("Tree: ",test.totalNode.length);
// console.log("Tree: ",test.totalNode);
// const
// console.log();
