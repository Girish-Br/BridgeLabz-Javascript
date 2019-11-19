/****************************************
* @Purpose :Count the binary search tree for given node. 
* @file   :binarySearchTree.js
* @author :Girish B R
* @Date   :08-11-2019
****************************************/
var binaryTree=require('../../utility/dataStructuresProgramsUtility');
function findBSTs() {
    console.log("Enter the number of BinarySearchTrees you  want: ");
    var binarysearchTree = binaryTree.inputread();
    try{
        /*
        * it will checks number of binary search trees we want to print
        */
        if (binarysearchTree % 1 != 0) throw "Number required , Floating value found"
        if (binarysearchTree < 0) throw "BSTs value is Invalid , Please Enter a positive value"
        if (binarysearchTree == "") throw "No input found"
        if (isNaN(binarysearchTree)) throw "No input or String found , Please Enter a value in range 1-12";
        while (binarysearchTree-- > 0) {
            console.log("");
            console.log("Enter number of nodes you want in the BST");
            var nodes = binaryTree.inputread();
            try{
                /*
                * it will checks number of nodes we want to print the binary trees
                */      
                if (nodes % 1 != 0) throw "Number required , Floating value found"
                if (nodes < 0) throw "BSTs value is Invalid , Please Enter a positive value"
                if (nodes == "") throw "No input found"
                if (isNaN(nodes)) throw "No input or String found , Please Enter a value in range 1-12";
                /*
                * find count of BST and binary trees with n odes 
                */
                var count;
                count = binaryTree.countBST(nodes);
                /*
                * print count of BST and  binary trees with n nodes 
                */
                console.log("Total number of BSTs with " + nodes + " nodes is " + count);
            }   catch(err){
                    console.log("Error: " + err);
                }
            console.log();
        }
    }   catch(err){
            console.log("Error: " + err);
        }
}
findBSTs();