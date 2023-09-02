const axios = require("axios");
const { keccak256 } = require("ethereum-cryptography/keccak");
const verifyProof = require("../utils/verifyProof");
const niceList = require("../utils/niceList.json");
const MerkleTree = require("../utils/MerkleTree");
const { bytesToHex, toHex } = require("ethereum-cryptography/utils");

const serverUrl = "http://localhost:1225";

// create the merkle tree for the whole nice list
const merkleTree = new MerkleTree(niceList);

// get the root

// find the proof that name is in the list
const name = "Mr. Janice Ryan";
const index = niceList.findIndex((n) => n === name);
const proof = merkleTree.getProof(index);

async function main() {
  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
    // TODO: add request body parameters here!
    name,
    proof,
  });

  console.log({ gift });
}

main();
