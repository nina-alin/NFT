// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Palamon is ERC721, ERC721Enumerable, ERC721Pausable, Ownable {
    uint256 private _nextTokenId;
    uint256 private maxSupply = 100;
    bool public publicMintOpen = false;

    constructor(address initialOwner)
        ERC721("Palamon", "PLC")
        Ownable(initialOwner)
    {}

    function _baseURI() internal pure override returns (string memory) {
        return "ipfs://QmbFNuvzYSN67qd5JRLLjfN5djwnijys2WbNQdkpiffEDC/";
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

    function multipleMint(uint256 num) public onlyOwner {
        for(uint256 j = 0;j < num;j++){
            publicMint();
        }
    }

    function publicMint() public payable {
        require(publicMintOpen, "Mint impossible pour le moment.");
       // require(msg.value == 0.001 ether, "Montant de transaction incorrect. Veuillez envoyer exactement 0.001 ether.");
        require(totalSupply() < maxSupply, "Limite maximale atteinte.");
        uint256 tokenId = _nextTokenId++;
        _safeMint(msg.sender, tokenId);
    }

    function withdraw(address _addr) external onlyOwner {
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
}