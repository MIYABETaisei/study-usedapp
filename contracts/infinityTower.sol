// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract infinityTower {
    struct Floor {
        string ownername;
        string message;
        string link;
        uint256 color;
        uint256 windowsTint;
    }

    event NewFloor(
        uint256 floor,
        string ownerName,
        string message,
        string link,
        uint256 color,
        uint256 windowsTint
    );

    Floor[] public floors;
    uint256 public nbFloors;

    function createFloor(
        string memory _ownername,
        string memory _message,
        string memory _link,
        uint256 _color,
        uint256 _windowsTint
    ) external {
        floors.push(Floor(_ownername, _message, _link, _color, _windowsTint));
        emit NewFloor(
            nbFloors,
            _ownername,
            _message,
            _link,
            _color,
            _windowsTint
        );
        nbFloors++;
    }
}
