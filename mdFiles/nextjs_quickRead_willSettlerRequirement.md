### Phase1

Write smart contract, unit tests, deployment scripts

use wagmi to connect with UI to allow user to create assets, wills.
write playwright tests 

Smart contract changes:
write multi sig wallet
assign roles for users:
allow multiple wallets as beneficiary

test 
- asset data input
- will data input
- manual settle feature
- auto settle feature (hook up with chainlink)
- 

Store events & user activities in mongoDb

### Phase2

create RestApi to expose below datas.


query events from blockchain to show in front end.
Implement Graphql

BigchainDb - for asset creation, pretty much similar to what i need

User UI 
page1 - show list of assets created

Sum the values of assets and show in usd

page2 - list of wills created

### Phase3

Admin UI

Admin
Report to generated lsit of will mattured or settled or activity
Report to show the list of wills to be matured for a week



Devs quick read on pages


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
