current_contract
last_contract='0x6635BaCd122cfc8e8D726633f224746Bd2578872

current contract:
assetCreator=0x0DaFC14Af4E71716971E04444fe858d9fC413dc3
willCreator=0xE2004201614A5D19753bd0356f96296fF536E175

Select ccommand

failure:
 1. upgraded to latest version of Wagmi (2 fromm 1.4 version) without reading release notes. 
 lots of refactor

 2. Built Front end, react components, and implemented wagmi write method to create assets. Expected wagmi to work directly. Write did not work for a while, I was debugging and reading documentation of wagmi. 
 when i added print statements, i found user input data dint pass in to write method to initiate contract.
 - found the problem when i hardcoded values.




passed:


