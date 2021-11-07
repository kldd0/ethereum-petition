pragma solidity >=0.4.22 <0.9.0;

contract Petition {
	uint256 public signatures_count = 0;

	struct Signature {
		uint256 id;
		address owner;
		string name;
	}

	event SignatureCreated(
		uint256 id,
		string name
	);

	mapping(uint256 => Signature) public signatures;

	function create_signature(string memory _name) public {
		signatures_count++;
		signatures[signatures_count] = Signature(signatures_count, msg.sender, _name);
		emit SignatureCreated(signatures_count, _name);
	}
}