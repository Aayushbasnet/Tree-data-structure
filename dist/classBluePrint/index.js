"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreeStructure = void 0;
class Node {
    constructor(label, description, isLeaf, parentId) {
        this.id = null;
        this.label = label;
        this.description = description;
        this.children = [];
        this.isLeaf = isLeaf;
        this.parentId = parentId;
    }
}
class TreeStructure {
    constructor() {
        this.queue = [];
        this.allNodeQueue = [];
        this.nodePath = "";
        this.root = null;
        this.add("Root", "This is a parent node", null, true);
    }
    add(label, description, parentId, isLeaf) {
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
        }
        else {
            newNode.isLeaf = false;
        }
        // for(let i=0; i < this.totalNode.length; i++){
        //     console.log("New root: ",this.totalNode[i]);
        // };
    }
    traversePath(ownId) {
        this.nodePath = '';
        this.allNodeQueue.map((node) => {
            if (node.id === ownId) {
                this.traversePath(node.parentId);
                this.nodePath = this.nodePath + "/" + node.label;
                // console.log("nodepath: ", this.nodePath);
            }
        });
        return this.nodePath;
    }
}
exports.TreeStructure = TreeStructure;
// const test = new TreeStructure();
// // console.log("Actual object before: ", test);
// // test.add('abc', "test 1", null,false);s
// test.add('xyz', "test 2", 1,true);
// test.add('qwe', "test 3", 1, false);
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
