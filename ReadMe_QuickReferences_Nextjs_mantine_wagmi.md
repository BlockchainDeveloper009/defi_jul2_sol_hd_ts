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


error:

PS C:\source\repos\solidity_dev\defi_WillCreator_WagmiReactHooksBr\defi_jul2_sol_hd_ts\frontend\will_settler_ui> npm install    
npm ERR! code ERESOLVE
npm ERR! ERESOLVE unable to resolve dependency tree
npm ERR!
npm ERR! While resolving: will_settler_ui@0.1.0
npm ERR! Found: @tanstack/react-query@4.36.1
npm ERR! node_modules/@tanstack/react-query
npm ERR!   @tanstack/react-query@"^4.36.1" from the root project
npm ERR!
npm ERR! Could not resolve dependency:
npm ERR! peer @tanstack/react-query@">=5.0.0" from wagmi@2.5.7
npm ERR! node_modules/wagmi
npm ERR!   wagmi@"^2.0.3" from the root project
npm ERR!
npm ERR! Fix the upstream dependency conflict, or retry
npm ERR! this command with --force or --legacy-peer-deps
npm ERR! to accept an incorrect (and potentially broken) dependency resolution.
npm ERR!
npm ERR!
npm ERR! For a full report see:
npm ERR! C:\Users\krtzx\AppData\Local\npm-cache\_logs\2024-02-29T02_37_09_440Z-eresolve-report.txt     

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\krtzx\AppData\Local\npm-cache\_logs\2024-02-29T02_37_09_440Z-debug-0.log
PS C:\source\repos\solidity_dev\defi_WillCreator_WagmiReactHooksBr\defi_jul2_sol_hd_ts\frontend\will_settler_ui>

soln: 
Remove-Item -Path .\node_modules -Recurse -Force
npm run build
npm install --force
*  if you dont want to force install, then use below command
npm install --legacy-peer-deps