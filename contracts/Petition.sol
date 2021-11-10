// SPDX-License-Identifier: UNLICENSED

pragma solidity >=0.4.22 <0.9.0;

contract Petition {
	uint256 public signatures_count = 0;

	struct Signature {
		uint256 id;
		address owner;
		string name;
	}

	event SignatureCreated(uint256 id, string name);

	mapping(uint256 => Signature) private signatures;
	mapping(address => bool) private signers;

	function create_signature(string memory _name) public {
		require(bytes(_name).length > 0);
		signatures_count++;
		signatures[signatures_count] = Signature(signatures_count, msg.sender, _name);
		signers[msg.sender] = true;
		emit SignatureCreated(signatures_count, _name);
	}

	function check_signature() view public returns (bool) {
	    return signers[msg.sender];
	}
}
