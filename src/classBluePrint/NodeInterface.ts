export interface NodeInterface{
    id?: number;
    label: string;
    description: string;
    children?: NodeInterface[];
    isLeaf?: boolean;
    parentId?:number;
};