// SPDX-License-Identifier: MIT
// OpenZeppelin Contracts (last updated v4.7.0) (token/ERC1155/ERC1155.sol)

pragma solidity ^0.8.1;


import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
//import "@chainlink/contracts/src/v0.8/interfaces/AutomationCompatibleInterface.sol";
//import "./Vault.sol";
//import "./lib/willInfo.sol";
import "./WWethBase20_multiToken.sol";
import "./AssetCreatorFactory_multiToken.sol";
import "hardhat/console.sol";

/** **********************************************
 * @notice
 * *******************************************
 * title cryptoWill creator with MultiToken Support
 * changes on : 2024_jan_20
 * 
 * author Harish
 * @dev uses erc20
 * contract purpose:
 * step1: Allows user to create assets(crypto coin value)
 * step2: Using asssetIds, create new Wills with start, maturity date, benefitors
 *         todo : start,end date to unix time stamp
 *         todo : get benefitors (payabel address [])
 *
 * Highlights :  chainlink KeepUp
 * variable naming:
 * //s_ = storage vars
 * //i_ immutable vars
 * // Chainlink oracle -> Automated Execution (Chainlink Keepers)
 * dec/09/2022 - add require statements to all methods
 * - burn the old will after hitting settle
 * - find out why contract doesnt get credited
 * - create new ds to fetch wills by maturity date either struct or new mapping + array combination
 * - Access control: https://docs.openzeppelin.com/contracts/3.x/extending-contracts#using-hooks
 *
 * DeployVersion-15.0.0
 */
//error Raffle__UpkeepNotNeeded1(uint256 currentBalance, uint256 numPlayers, uint256 raffleState);

contract WillsCreatorFactory_multiToken_AssetHandlingRemoved is WWethBase20_multiToken {
    using SafeERC20 for IERC20;
    using SafeMath for uint256;

    error willCreatorFactory__NotEnoughETHEntered();
    error willCreatorFactory__UpkeepNotNeeded();
    /* states variables */
     address public owner;
    
    AssetCreatorFactory_multiToken public AssetCreatorFactoryInstance;
    uint256 public s_currentBondId;
    uint256 public s_Contract_birthdate;
    address public s_Contract_moderator;
    uint256 private immutable i_entranceFee = 1;

    bool private s_DoesAdminExist;

    bool private s_OneBondinCirculation;




    // JSON-like structure containing info on each bond
    // mapping of a bond to its information (of type Info above)
    mapping(uint256 => willlInfo) public s_willlInfo;

    //this line is to create an array to keep track of the bonds
    willlInfo[] private s_willsinExistence;

    //added this new variables to track the wills created by a user
    mapping(address => willlInfo[]) private s_userCreatedWills;
    /* contains maturity date and contract ids mature on a certain day*/
    mapping(uint256 => uint256[]) private s_WillsByMaturityDate;

    mapping(uint256 => uint256) public s_MaturityDates;
    uint256[] public s_MaturityDates_keys;
//
    //this is to create an ADMIN role
    mapping(address => bool) public adminrole;

    constructor(address _AssetCreatorFactoryAddress, string memory name, string memory symbol, address mod) WWethBase20_multiToken(name, symbol) {
        AssetCreatorFactoryInstance = AssetCreatorFactory_multiTOken(_AssetCreatorFactoryAddress);
        s_Contract_moderator = mod;
        owner = msg.sender;
    }

          // Events
    
    event Withdraw(address indexed token, address indexed recipient, uint256 amount);
  
    /**
      @param willId - willId from which funds to be released
      @param willAmount - will amount in eth
    */
    event moderatorOverrideToReleaseFunds(
        string willId,
        uint256 willAmount
    );
    /**
    @param willofPropertyName: Property name or address for ex. Town home located in Santa clara, 3490 Moretti lane, Milipitas,CA
    @param willStartDate: When will Starts
    @param willMaturityDate: deadline after which will gets executed automatically
    @param cryptoWillId: Crypto property such as BTC, ETH
    */
    event willCreated(
        string willofPropertyName,
        uint256 willStartDate,
        uint256 willMaturityDate,
        uint cryptoWillId
    );
      /**
    @param cryptoWillId: Property name or address for ex. Town home located in Santa clara, 3490 Moretti lane, Milipitas,CA
    @param benefitor: who gets the funds
    @param willMaturityDate: deadline after which will gets executed automatically
    @param willAmount: will amount
    */
    event willSettled(
        uint indexed cryptoWillId,
        baseWillStatus indexed baseWillStatus,
        address indexed benefitor,
        uint256 willMaturityDate,
        uint256 willAmount
    );

      /**
    @param cryptoWillId: Property name or address for ex. Town home located in Santa clara, 3490 Moretti lane, Milipitas,CA
    @param benefitor: who gets the funds
    @param willMaturityDate: deadline after which will gets executed automatically
    @param willAmount: will amount
    */
    event willMatured(
        uint indexed cryptoWillId,
        address indexed benefitor,
        uint256 willMaturityDate,
        uint256 willAmount
    );

    /**
    @param cryptoWillId: Property name or address for ex. Town home located in Santa clara, 3490 Moretti lane, Milipitas,CA
    @param willOwner: who gets the funds
    @param willMaturityDate: deadline after which will gets executed automatically
    @param willAmount: will amount
    */
    event willCancelled(
        uint indexed cryptoWillId,
        address indexed willOwner,
        uint256 willMaturityDate,
        uint256 willAmount
    );



    // function createCashvault () external {

    // }

    modifier onlyModerator() {
        require(
            msg.sender == s_Contract_moderator,
            "You must be an Moderator to execute this function"
        );
        _;
    }

    modifier onlyAdmin() {
        require(
            adminrole[msg.sender] == true,
            "You must be an admin to do this"
        );
        _;
    }
       modifier onlyOwner() {
        require(msg.sender == owner, "Not the owner");
        _;
    }



    // modifier onlyNewAsset(string memory locId) {
    //     require(
    //         (AssetCreatorFactoryInstance.cryptoAssets[locId].assetStatus != AssetCreatorFactoryInstance.cryptoAssetstatus.Created &&
    //         AssetCreatorFactoryInstance.cryptoAssets[locId].assetStatus != AssetCreatorFactoryInstance.cryptoAssetstatus.Assigned ),
    //         "onlyNewAssets"
    //     );
    //     _;
    // }


//

    function getNextWillId() public view returns (uint256) {
        return s_currentBondId;

    }

/**
 * this method had a bool map to store if a position in an array is set or not
 * Optimization: since this involved unncessary storage, removed this method as part of gas optimization
 * @param locId : ddf
 * @return true or false
 */
    function check_position_s_arr_cryptoAssetIds_expensive(string memory locId)
    public returns (bool) {
            // using a map to
        return false;
    }
        /**
         *
         * @param _birthdate :contract start date for testing purpose
         */
    function setContractBirthDate(uint256 _birthdate) public {
        s_Contract_birthdate = _birthdate;
    }

    function getContractBirthDate() public view returns (uint256 _birthdate) {
        return s_Contract_birthdate;
    }
    //1690606800 july-29
    //1690693200 july-30 12 am  //86,400 (1 day in seconds)
    //https://www.unixtimestamp.com/index.php?ref=theredish.com%2Fweb

  
    
     /** @dev
      *  @notice gets contract balance
     *
    */
    function c_getContractBalance() public view returns (uint) {
        return address(this).balance;
    }
     /** @dev this function is to initialize the admin role. This will provide the devs with funds
     * Step3: Create  Will, generates will id,
    */
    function a_createCryptoVault(
        string memory _assetId,
        uint256 willStartDate,
        uint256 willMaturityDate,
        address payable Benefitors
    ) public payable onlyValidAsset(_assetId) {

        s_willlInfo[s_currentBondId].willId = s_currentBondId;
        s_willlInfo[s_currentBondId].assetId = _assetId;
        s_willlInfo[s_currentBondId].willStartDate = willStartDate;
        s_willlInfo[s_currentBondId].willMaturityDate = willMaturityDate;
        s_willlInfo[s_currentBondId].willManager = msg.sender;
        s_willlInfo[s_currentBondId].willOwner = msg.sender;
        s_willlInfo[s_currentBondId].s_baseStatus = baseWillStatus.Started;
        s_willlInfo[s_currentBondId].Benefitors = payable(Benefitors);
        AssetCreatorFactoryInstance.cryptoAssets[_assetId].isAvailable = false;
        AssetCreatorFactoryInstance.cryptoAssets[_assetId].assetStatus = AssetCreatorFactoryInstance.cryptoAssetStatus.Assigned;
        // _mint(
        //     address(this),
        //     //s_currentBondId,
        //     cryptoAssets[_assetId].AssetAmount
        // );
        console.log("msg sender %s", msg.sender);
        s_userCreatedWills[msg.sender].push(s_willlInfo[s_currentBondId]);
        uint dateHash = generateHash(willMaturityDate);
        s_WillsByMaturityDate[willMaturityDate].push(s_currentBondId);


        if(s_MaturityDates[willMaturityDate] > 0 ){
// maturity date already exists

        console.log("s_MaturityDates[willMaturityDate]");
        console.log(s_MaturityDates[willMaturityDate]);
        s_MaturityDates[willMaturityDate] = s_WillsByMaturityDate[willMaturityDate].length;
        console.log("s_MaturityDates[willMaturityDate]");
        console.log(s_MaturityDates[willMaturityDate]);
        }else{
            //new maturity date found and thereofre adding to the array
            console.log(s_MaturityDates[willMaturityDate]);
            console.log("adding will maturity");
            s_MaturityDates_keys.push(willMaturityDate);
        }

        s_willsinExistence.push(
            willlInfo(
                s_currentBondId,
                _assetId,
                willStartDate,
                willMaturityDate,
                msg.sender,
                s_willlInfo[s_currentBondId].willManager,
                s_willlInfo[s_currentBondId].Benefitors,
                s_willlInfo[s_currentBondId].s_baseStatus
            )
        );
        /*      string assetId;
        uint256 willStartDate;
        uint256 willMaturityDate;
        address willOwner;
        address willManager;
        address payable Benefitors;a_
        baseStatus s_baseStatus;
        */
  //      payable(msg.sender).transfer(cryptoAssets[_assetId].AssetAmount);
        // transferFrom(msg.sender, address(this), cryptoAssets[_assetId].amount);

        unchecked {
            s_currentBondId++;
        }

        emit willCreated(
            _assetId,
            willStartDate,
            willMaturityDate,
            s_currentBondId - 1
        );
        // @todo implement maturity date based wills
    }


    /** @dev this function is to initialize the admin role. This will provide the devs with funds
     *
    */
    function addADMINrole() external payable {
        // require (msg.value == 0 ether, " please send .001 ether");
        require(
            s_DoesAdminExist == false,
            "Only one Admin is allowed to issue bonds"
        );
        // if (msg.value < i_entranceFee) {
        //     revert Raffle__NotEnoughETHEntered();
        // }

        adminrole[msg.sender] = true;
        s_DoesAdminExist = true;
    }
     /**
      *
    @notice : "provies all bonds created by an address"
    @param addr: Property name or address for ex. Town home located in Santa clara, 3490 Moretti lane, Milipitas,CA

    @return : returns array of userCreaedWills for a user address

    */
    //returns Bonds created by a single user
    function getUserCreatedBonds(
        address addr
    ) external view returns (willlInfo[] memory) {
        return s_userCreatedWills[addr];
    }
//s_userCreatedAssets



    //returns all Bonds in existence
    function getAllBonds() external view returns (willlInfo[] memory) {
        return s_willsinExistence;
    }
    /**
    *
    @notice : "provies all bodns created for an address"

    @return : string which is Asset id

    */
    // returns true, if admin flag is set to calling address;else false
    function checkIfAddminRoleIsPresent() public view returns (bool) {
        if (adminrole[msg.sender] == true) {
            return true;
        } else {
            return false;
        }
    }

    //0x1c91347f2A44538ce62453BEBd9Aa907C662b4bD
         /**
      *
    @notice : "provies all bodns created for an address"
    @param willId: Property name or address for ex. Town home located in Santa clara, 3490 Moretti lane, Milipitas,CA

    */
    function manuallySettleWill(uint256 willId) public payable {
        string memory asst = s_willlInfo[willId].assetId;
        require(
            s_willlInfo[willId].s_baseStatus == baseWillStatus.Started,
            string.concat("Will's status should be in start status(1) ","to manually settle")
            
        );
        //require for maturity date comparisoin
        //add only owner can call
        // s_willlInfo[willId].Benefitors.transfer(
        //     cryptoAssets[asst].amount);

        //safeTransferFrom(address(this),s_willlInfo[willId].Benefitors, willId, cryptoAssets[asst].amount, "0x0");
        payable(s_willlInfo[willId].Benefitors).transfer(
            AssetCreatorFactoryInstance.cryptoAssets[asst].AssetAmount
        );
        s_willlInfo[willId].s_baseStatus = baseWillStatus.ManuallySettled;
        emit willSettled(
            willId,
            s_willlInfo[willId].s_baseStatus,
            s_willlInfo[willId].Benefitors,
            s_willlInfo[willId].willMaturityDate,
            AssetCreatorFactoryInstance.cryptoAssets[asst].AssetAmount
        );
    }

    function makeModeratorToReleaseFunds(uint256 willId, address payable recipient, uint256 amount) public payable onlyModerator {
        require(msg.value >= amount, "Insufficient Ethers");
        // (bool success, ) = recipient.call(value, amount)("");

        // require(success, "Ether transfer failed");

        // emit moderatorOverrideToReleaseFunds(willId, amount);
    }
    //**Cancell the Will  */
    function cancelWill(uint256 willId) public payable {
        string memory asst = s_willlInfo[willId].assetId;
        require(
            s_willlInfo[willId].s_baseStatus == baseWillStatus.Started,
            "Will is not in Start Status"
        );
        // only willl owner can cancell this txn
         require(
            s_willlInfo[willId].willOwner == msg.sender,
            "only will owner can perform this operation"
        );

        //require for maturity date comparisoin
        //add only owner can call
        // s_willlInfo[willId].Benefitors.transfer(
        //     AssetCreatorFactoryInstance.cryptoAssets[asst].amount);

        //safeTransferFrom(address(this),s_willlInfo[willId].Benefitors, willId, AssetCreatorFactoryInstance.cryptoAssets[asst].amount, "0x0");
        payable( s_willlInfo[willId].willOwner).transfer(
            AssetCreatorFactoryInstance.cryptoAssets[asst].AssetAmount
        );
        s_willlInfo[willId].s_baseStatus = baseWillStatus.Cancelled;
        emit willCancelled(
            willId,
            s_willlInfo[willId].willOwner,
            s_willlInfo[willId].willMaturityDate,
            AssetCreatorFactoryInstance.cryptoAssets[asst].AssetAmount
        );
    }

         /**
      *
    @notice : "provies all bodns created for an address"
    @param willId: Property name or address for ex. Town home located in Santa clara, 3490 Moretti lane, Milipitas,CA

    @return : returns string "Created | Started | Matured | Settled"

    */
    function getWillStatus(uint willId) public view returns (string memory) {

        return checkEnumStatus(s_willlInfo[willId].s_baseStatus);
    }





    //0x5B38Da6a701c568545dCfcB03FcB875f56beddC4
    //0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2
    //0x540d7E428D5207B30EE03F2551Cbb5751D3c7569

    fallback() external payable  {
        // custom function code
        require(msg.data.length == 0); emit LogDepositReceived(msg.sender);
    }

    receive() external payable  {
        // custom function code
        require(0 == 0); emit LogDepositReceived(0x5B38Da6a701c568545dCfcB03FcB875f56beddC4);
    }

    function getEntranceFee() public pure returns (uint256) {
        return i_entranceFee;
    }
    function generateHash(uint256 matDate) public pure returns (uint256) {
        return uint256(keccak256(abi.encodePacked(matDate)));
    }
/**
   @dev: dont call this function;
/*
    function getMaturityDates_InEfficient  () public view returns (uint256[] memory){
       for(uint256 i=0; i< s_MaturityDates_keys.length; i++){
           console.log(s_MaturityDates_keys[i]);
       }
       return s_MaturityDates_keys;
    }

    function getMaturityDates_gasEfficient() public view returns (uint256[] memory){
       //refactored to a memory variable, as storage variable cost high gas to read
       // remember: mappings can't be in memory
       uint256[] memory m_maturityDates =  s_MaturityDates_keys;
       for(uint256 i=0; i< m_maturityDates.length; i++){
           console.log(m_maturityDates[i]);
       }
       return m_maturityDates;
    }


    function getBlockNumber() public view returns(uint256){
        return block.number;
    }
    function getBlockTimestamp() public view returns(uint256){
        return block.timestamp;
    }
    function getBlockDifficulty() public view returns(uint256){
        return block.difficulty;
    }

    // function performUpKeep(
    //     bytes calldata
    // ) external override {
    //     (bool upKeepNeeded,) = checkUpKeep("");
    //     if(!upKeepNeeded) {
    //         revert Raffle__UpkeepNotNeeded(
    //             // address(this).balance,
    //             // s_players.length,
    //             // uint256(s_raffleState)

    //         );
    //     }
    // }
    // function checkUpKeep(
    //     bytes memory /*checkData */
    // )
    // public
    // view
    // override
    // returns (
    //     bool upkeepNeeded,
    //     bytes memory /* performData*/
    // ){
    //     // bool timePassed = ((block.timestamp - s_lastTimeStamp) > i_interval);
    //    settleAssets(1);
    //    upkeepNeeded = false;
    //    return (upkeepNeeded, "0x0");
    // }
    // function checkUpkeep(
    //     bytes memory /* checkData */
    // )
    //     public
    //     view
    //     override
    //     returns (
    //         bool upkeepNeeded,
    //         bytes memory /* performData */
    //     )
    // {
    //     // bool isOpen = RaffleState.OPEN == s_raffleState;
    //     // bool timePassed = ((block.timestamp - s_lastTimeStamp) > i_interval);
    //     // bool hasPlayers = s_players.length > 0;
    //     // bool hasBalance = address(this).balance > 0;
    //     // upkeepNeeded = (timePassed && isOpen && hasBalance && hasPlayers);
    //     return (upkeepNeeded, "0x0"); // can we comment this out?
    // }
    //  /**
    //  * @dev Once `checkUpkeep` is returning `true`, this function is called
    //  * and it kicks off a Chainlink VRF call to get a random winner.
    //  */
    // function performUpkeep(
    //     bytes calldata /* performData */
    // ) external override {
    //     (bool upkeepNeeded, ) = checkUpkeep("");
    //     // require(upkeepNeeded, "Upkeep not needed");
    //     // if (!upkeepNeeded) {
    //     //     revert Raffle__UpkeepNotNeeded(
    //     //         address(this).balance,
    //     //         s_players.length,
    //     //         uint256(s_raffleState)
    //     //     );
    //     // }
    //     // s_raffleState = RaffleState.CALCULATING;
    //     // uint256 requestId = i_vrfCoordinator.requestRandomWords(
    //     //     i_gasLane,
    //     //     i_subscriptionId,
    //     //     REQUEST_CONFIRMATIONS,
    //     //     i_callbackGasLimit,
    //     //     NUM_WORDS
    //     // );
    //     // // Quiz... is this redundant?
    //     // emit RequestedRaffleWinner(requestId);
    // }
}