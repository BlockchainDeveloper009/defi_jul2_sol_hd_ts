Inspiration: 
============
I have planned to own a few crypto tokens for long term, then i thought during this long holding time, if something happens to me, all the holding tokens would go unclaimed. I wanted a decentralized system, which can work without third party intervention(including lawyers), and pass on my assets to my son and family.

Hence, I created Will Creator system.

Target Users of the system:
==========================
People who wants to a automated decentralized settlement.

1. Tom who is 35 years old, has risky career for eg, moto sport, auto racing etc.,

3. Recurring - Middle aged man who wants to contribute to a NGO organization wallet address, every month
4. Grandparents who wants to pass on their asset tokes to their grandson or grandchildren.
5. Some one is urcertain of their ilfe.
    for eg:
    * like Military, Navy, Airforce.
    * A sailor working on Nigerian waters, north sea water who wants to send their tokens to family.
    * Risk Job Oil rig workers, Skydivers who wants to protect the assets 

### Phase#1

Completed: 
- Write smart contract, unit tests, deployment scripts
- use wagmi to connect with UI to allow user to create assets, wills.



write api tests to verify asset creations details inserted into 
database or file updates
write api tests to verify Will creations details inserted into 
database or file updates

##### Phase#1 Pending Items
UI_Changes:

write playwright tests 

Backend Changes_Smart contract changes:
write multi sig wallet
assign roles for users:


test coverage:

Scenario1: AssetCreation-HappyPath
- asset data input
- will data input

when user create assets:
    then: 
    - contract generates an assetId if supplied values (asset token, balance, token address) are right on chain
    - generate a .json & .csv file and store transaction id, transaction values for quick reference by user wallet id

when user create will using asset ca-0:
    then:
    - go through 2 days wait time to go through validation of data like valid assets, data, valid benefit address

    - create a local folder for UserActivities, 
    - generate a .json & .csv file and store transaction id, transaction values for quick reference by user wallet id
    - an will id is created, asset 

### BUGS
- BUG#1: manual settle feature - UI-bug found-feb/22/2024, 'created' status from will did not match with enum status from asset contract vs validation on will status
when user does manual settle by interactign with contract from polygonscan, it worked.
- BUG#2:-OPEN- Display of will status also did not work 
- BUG#3:-OPEN-pageAssetManager-Table colummns not aligned, Will status doesnt display right status 

- display status of will in front end.
- auto settle feature (hook up with chainlink)

Address module:
- moderator address on the chain is valid
- benefit address is valid on chain.

Audit module: 


Store events & user activities in mongoDb

### Phase2

- create RestApi to expose below datas.
- query events from blockchain to show in front end.
- Implement Graphql to read data from blockchain
- Implement docker
- BigchainDb - for asset creation, pretty much similar to what i need
- mongodb: store 
    * Table1: chainId, Asset Token Symbol, Asset Token Address
    * Table2: chainId, ContractAddress,ContractAbi

[tanstack-ref-useQuery](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery)

config UI:
- admin can update source address, abi, pick from a dropdown and save.
- csv-files: config, config history

User UI 
    page1 - show list of assets created - implemented
    Sum the values of assets and show in usd
    page2 - list of wills created

- Auto Renewal of Contract based on frequency

### Phase3

Admin UI

login as Admin: only group of admins allowed.

Report to generated lsit of will mattured or settled or activity
Report to show the list of wills to be matured for a week
list Asset  by status
list wills by status, implement sort,filter, search from UI.
future allow multiple wallet address as beneficiaries


Audit module: 
fields
- user
- datetime,
- action
- User_Access_Channel,(WebApp, backend,)


Protocol file:

[Refer-wagmi-playgroundUser-profile-implementation-](https://github.com/wevm/wagmi/blob/b2d73f8bc7afa21441b6e8f5ecd451d1e069228a/playgrounds/vite-react/src/App.tsx#L57)

Devs quick read on pages:


CompCreateAssetsFormUsingReactHooksWagmi2

CompCreateAssetsForm_SimulationUsingReactHooksWagmi2
--------------
AssetsCreator
pageAssetsCreatorWagmiReactHook-> CompCreateAssetsFormUsingReactHooksWagmi2
-----------
pageWillsCreatorUsingWagmiReact
//works good, both asset creation & will creation on same page
WillCreator===>pageWillsCreatorUsingReactWagmi2->CompCreateAssetsForm_SimulationUsingReactHooksWagmi2, CompCreateWillsFormusingReactHooksWagmi2
//will creator - only will creation
pageWillsCreatorUsingWagmiReact

pageWillsManager->ManageWillsTable, CompFindStatus_Assets_Wills

pageAssetsManager->ManageAssetsTable


pageName: 'pageWillsManager'
refer param passing to differeing page using createQueryString


