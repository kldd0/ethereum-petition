const Petition = artifacts.require("./Petition.sol");

module.exports = function (deployer) {
  deployer.deploy(Petition);
};
