// import React from 'react';
// const SHA256 = require('crypto-js/sha256'); //to calculate hash 
// /*** Block Creation
// @index  where the block sits on the chain
// @timestamp when the block was created
// @data included in the block, ex: amount of currency
// @prevHash is the hash of the previous block

//userUID for public key linked to user blockchain instead of RSA


// DEPENDENCIES FOR README:
// npm install crypto-js
// */
// // 
// class Block{
    
//     constructor(index, timestamp, data, prevHash=""){
//         this.index = index;
//         this.timestamp = timestamp;
//         this.data = data;
//         this.prevHash = prevHash;
//         this.hash=this.calculateHash();
//     }

//     calculateHash(){
//         return SHA256(
//             this.index + 
//             this.prevHash + 
//             this.timestamp + 
//             JSON.stringify(this.data)).toString();
//     }

//     getDate(){
//         const date = new Date();

//         let day = date.getDate();
//         let month = date.getMonth() + 1; //+1 because months are zero indexed
//         let year = date.getFullYear();
//         //returns string in the format: yyyy-mm-dd Time:hh:mm:ss.ms
//         return date;
//      }
// }

// class Blockchain{
//     constructor(){
//         this.chain = [this.createGenesisBlock()];
//         // Optional, blockchain difficulty: this.difficulty = 2;
//     }

//     createGenesisBlock(){
//         return new Block(0, this.getDate(), "Genesis Block", 0);
//     }

//     getIndex(){
//         const number = this.chain.length;
//         return number;
//         // if (this.chain.length-1 == 0){
//         //     return 1;
//         // }
//         // else{
//         //     return this.chain.length-1;
//         // }  
//     }

//     getPreviousBlock(){
//         return this.chain[this.chain.length - 1];
//      }

//      addBlock(newBlock){

//         newBlock.prevHash = this.getPreviousBlock().hash;
//         newBlock.hash = newBlock.calculateHash();
//         this.chain.push(newBlock);
//         console.log(this.chain);
//      }

//      validateChain(){
//         for(let i=2; i < this.chain.length; i++){
//             const currentBlock = this.chain[i];
//             const previousBlock = this.chain[i-1];

//             //recalculate the hash of the current block
//             if(currentBlock.hash!== currentBlock.calculateHash()){
//                 console.log("Invalid Hash: current block");
//                 return false;
//             }
//             //check if current block points to previous block 
//             if(currentBlock.prevHash!== previousBlock.hash){
//                 console.log("Invalid Block: previous block");
//                 return false;
//             }

//             return true;
//         }
//      }

//      getDate(){
//         const date = new Date();

//         let day = date.getDate();
//         let month = date.getMonth() + 1; //+1 because months are zero indexed
//         let year = date.getFullYear();
//         //returns string in the format: yyyy-mm-dd Time:hh:mm:ss.ms
//         return date;
//      }
// }







