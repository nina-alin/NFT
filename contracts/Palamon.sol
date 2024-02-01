// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
//import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract Palamon is ERC721, ERC721Enumerable, ERC721Pausable, Ownable  {
    uint256 private _nextTokenId;
    uint256 private maxSupply = 10; //voir pour changer avec tokenID+1
    bool public publicMintOpen = true;
    uint256 public seed;
    uint rand;

    constructor(address initialOwner)
        ERC721("Palamon", "PLC")
        Ownable(initialOwner)
    {
        // seed = block.timestamp;
    }

    function _baseURI() internal pure override returns (string memory) {
        return "https://salmon-impressed-swan-813.mypinata.cloud/ipfs/QmRqmKZKDfW2njjkG5v7tZSgCuqc7K3jJCryYA3EaYbAww/";
    }

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    function editMintWindows(bool _publicMintOpen) external onlyOwner {
        publicMintOpen = _publicMintOpen;
    }

    function multipleMint() public onlyOwner {
        for(uint256 j = 0;j < maxSupply;j++){
            publicMint();
        }
    }

    function publicMint() public payable {
        require(publicMintOpen, "Mint impossible pour le moment.");
        require(totalSupply() < maxSupply, "Limite maximale atteinte.");
        uint256 tokenId = _nextTokenId++;
        _safeMint(msg.sender, tokenId);
    }

    function withdraw(address _addr) external payable  onlyOwner {
        uint256 balance = address(this).balance;
        payable(_addr).transfer(balance);
    }

    // The following functions are overrides required by Solidity.

    function _update(address to, uint256 tokenId, address auth)
        internal
        override(ERC721, ERC721Enumerable, ERC721Pausable)
        returns (address)
    {
        return super._update(to, tokenId, auth);
    }

    function _increaseBalance(address account, uint128 value)  
        internal  
        override(ERC721, ERC721Enumerable)
    {
        super._increaseBalance(account, value);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721Enumerable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }

function getTokensByOwner(address owner) external view returns (uint256[] memory) {
        uint256 balance = balanceOf(owner);
        uint256[] memory tokens = new uint256[](balance);

        for (uint256 i = 0; i < balance; i++) {
            tokens[i] = tokenOfOwnerByIndex(owner, i);
        }

        return tokens;
    }

    function getAllTokens() external view returns (uint256[] memory) {
        uint256 totalTokens = totalSupply();
        uint256[] memory tokens = new uint256[](totalTokens);

        for (uint256 i = 0; i < totalTokens; i++) {
            tokens[i] = tokenByIndex(i);
        }

        return tokens;
    }

    receive() external payable{}
    
    function getBalance() external view returns(uint){
        return address(this).balance;
    }

    function transfert(address payable from, address payable to, uint tokenId, uint amount) public payable{
        payable(to).transfer(amount);
        safeTransferFrom(from, to, tokenId);
    }
    
    function genererNombreAleatoire(uint limite) public returns (uint256) {
        uint256 randomNumber = uint256(keccak256(abi.encodePacked(block.difficulty, block.timestamp, seed)));
        seed = randomNumber; // Mettez à jour la graine pour le prochain tirage
        return randomNumber % limite;
    }

    event VariableLog(uint256 valeur);

    function battle(address p1, address p2, uint scoreP1, uint scoreP2) public returns(address) {
        rand = genererNombreAleatoire(scoreP1+scoreP2+1);
        emit VariableLog(rand);
        if(rand>scoreP1) return p2;
        else return p1;
    }
}