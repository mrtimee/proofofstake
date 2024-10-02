// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "erc721a/contracts/ERC721A.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract PelToken is ERC721A, Ownable {
    constructor() Ownable(msg.sender) ERC721A("PelToken", "STN") {}

    uint256 private limit = 5;
    string[] private descriptions = [
        "a futuristic cityscape where nature and technology coexist harmoniously",
        "a fantastical creature that combines features of a lion, a dragon, and a jellyfish",
        "an abstract representation of human emotions using vibrant colors and geometric shapes",
        "a whimsical scene of animals having a tea party in the middle of a forest",
        "a scene depicting time travel, with characters from different eras interacting in a bustling marketplace"
    ];
    mapping(uint256 => string) private _tokenURIs;

    function _baseURI() internal pure override returns (string memory) {
        return "QmQFn1Sufk1cmSFWo7VxH9uirTdTJLU37g9segU3rQKwaD";
    }

    function tokenURI(
        uint256 tokenId
    ) public view virtual override returns (string memory) {
        if (!_exists(tokenId)) revert("No Token Exists");

        string memory baseURI = _baseURI();
        string memory tokenIdStr = _toString(tokenId);
        string memory extension = ".jpg";
        return
            bytes(baseURI).length != 0
                ? string(abi.encodePacked(baseURI, "/", tokenIdStr, extension))
                : "";
    }

    function mint(address reciever, uint256 quantity) external onlyOwner {
        require(reciever != address(0), "Invalid Address");
        require(totalSupply() < limit, "Maximum NFT Minted");
        _safeMint(reciever, quantity);
    }

    function promtDescription(
        uint256 tokenId
    ) public view returns (string memory) {
        return descriptions[tokenId];
    }
}
