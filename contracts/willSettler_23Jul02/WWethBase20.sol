// SPDX-License-Identifier: MIT
// OpenZeppelin Contracts (last updated v4.7.0) (token/ERC1155/ERC1155.sol)

pragma solidity ^0.8.1;

import "@openzeppelin/contracts/token/ERC1155/IERC1155Receiver.sol";
import "@openzeppelin/contracts/token/ERC1155/utils/ERC1155Holder.sol";
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "./WWeth20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

//import "./lib/willInfo.sol";

abstract contract WWethBase20 is ERC20{ //WWeth20 {

    constructor(string memory name, string memory symbol) ERC20(name, symbol){

    }
    struct Person {
        string firstName;
        string lastName;
        string dateOfBirth;
    }
    struct Proof {
        string ssn;
        string driverLicense;
    }
    struct Property {
        uint PropertyType; //0 - crypto assets, 1  Real estate
    }
    struct willsByMaturitydates {
        uint maturityDate;
        uint willId;
    }
	
    /**
     * @dev this status to be assigned to Will itself.
     */
    enum baseWillStatus {
        willDoesntExist,
        Created,
        Started,
        Matured,
        ManuallySettled,
        Cancelled
    }
    struct willlInfo {
        //Person willCreator;
        uint willId;
        string assetId;
        uint256 willStartDate;
        uint256 willMaturityDate;
        address willOwner;
        address willManager;
        address payable Benefitors;
        baseWillStatus s_baseStatus;
        //address Altcoinswap;
        // address payable[] willBenefitors;
    }
    struct cryptoAssetInfo {
        string AssetId;
        string AssetName;
        uint256 AssetAmount;
        bool isAvailable;
        cryptoAssetStatus assetStatus;
        address AssetCreator;
    }
    /**
     * @dev this status to be assigned only Assets
     */
    enum cryptoAssetStatus {
        assetDoesntExist,
        Created,
        Assigned
    }
    mapping(address => uint) balances;
    mapping(address => mapping(address => bool)) approved;

    // function manipulateMapOfMap(uint spender) external {
    //     approved[msg.sender][spender] = true;                     //assign a value to the approved map
    //     approved[msg.sender][spender];                           //get the value of the map

    //     delete approved[msg.sender][spender] ;                    //delete the reference
    // }
    mapping(address => uint[]) scores;


           /**  
      * 
    @notice : "provies all bodns created for an address"
    @param s_baseStatus: Property name or address for ex. Town home located in Santa clara, 3490 Moretti lane, Milipitas,CA
    
    @return : returns string "Created | Started | Matured | Settled"
    
    */
    function checkEnumStatus(baseWillStatus s_baseStatus) public view returns (string memory) {
        if (s_baseStatus == baseWillStatus.Created) {
            return "Created";
        }
        if (s_baseStatus== baseWillStatus.Started) {
            return "Started";
        }
        if (s_baseStatus == baseWillStatus.Matured) {
            return "Matured";
        }
        if (s_baseStatus == baseWillStatus.Cancelled) {
            return "Cancelled"; //Started, Matured, Settled
        }

        if (s_baseStatus == baseWillStatus.ManuallySettled) {
            return "ManuallySettled"; //Started, Matured, Settled
        }
        return "InvalidStatus";
    }

    function checkAssetStatus(cryptoAssetStatus assetStatus) public view returns (string memory) {
             if (assetStatus == cryptoAssetStatus.Created) {
            return "Created";
        }
        if (assetStatus == cryptoAssetStatus.Assigned) {
            return "Assigned";
        }
         
        return "InvalidAssetStatus";
    }

        // function getWillsByMaturityDates()
    //     public
    //     view
    //     returns (willsByMaturitydates[] memory)
    // {
    //     willsByMaturitydates[] memory loc;
    //     int k = 0;
    //     for(uint i=0;i<s_WillsByMaturityDate.length;i++)
    //     {

    //         for(uint j=0;j< s_WillsByMaturityDate[s_MaturityDates[i]].length; j++)
    //         {
    //             loc[k].maturityDate = s_WillsByMaturityDate[i];
    //             loc[k].willId =  s_WillsByMaturityDate[s_MaturityDates[i]][j];
    //         }

    //     }

    //     return loc;
    // }

}
