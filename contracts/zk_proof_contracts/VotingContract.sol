// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Voting {
    // Struct to represent a registered voter
    struct Voter {
        bool isRegistered;
        bool hasVoted;
    }

    // Struct to represent a candidate
    struct Candidate {
        string name;
        uint256 voteCount;
    }

    // Mapping of voter addresses to voter information
    mapping(address => Voter) public voters;

    // Array of candidates
    Candidate[] public candidates;

    // Event to emit when a user casts a vote
    event Voted(address indexed voter, uint256 candidateIndex);

    // Constructor to initialize the candidates
    constructor(string memory _candidateA, string memory _candidateB) {
        candidates.push(Candidate(_candidateA, 0)); // Candidate A
        candidates.push(Candidate(_candidateB, 0)); // Candidate B
    }

    // Function to register a voter
    function registerVoter() public {
        require(!voters[msg.sender].isRegistered, "Voter already registered");
        voters[msg.sender].isRegistered = true;
    }

    // Function to cast a vote
    function vote(uint256 candidateIndex) public {
        require(voters[msg.sender].isRegistered, "Voter not registered");
        require(!voters[msg.sender].hasVoted, "Voter already voted");
        require(candidateIndex < candidates.length, "Invalid candidate index");

        // Update vote count for the chosen candidate
        candidates[candidateIndex].voteCount++;

        // Mark the voter as having voted
        voters[msg.sender].hasVoted = true;

        // Emit the Voted event
        emit Voted(msg.sender, candidateIndex);
    }

    // Function to retrieve the final voting results
    function getResults() public view returns (uint256[] memory) {
        uint256[] memory results = new uint256[](candidates.length);
        for (uint256 i = 0; i < candidates.length; i++) {
            results[i] = candidates[i].voteCount;
        }
        return results;
    }
}
