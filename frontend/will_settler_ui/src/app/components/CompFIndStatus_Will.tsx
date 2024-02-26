import React, { useEffect, useState } from 'react'
import {
    useAccount,
    useReadContract,
  } from "wagmi";
  import {
    WillsCreator_CONTRACT_ADDRESS_ABI,
    WillsCreator_CONTRACT_ADDRESS,
  } from "../SrcConstants_Wills";
  interface ComponentBProps {
    _willId: string;
  }
  const CompFIndStatus_Will: React.FC<ComponentBProps> = ({ _willId }) => {
    const [will_status, setWill_Status] = useState<any>(null);
  
    useEffect(() => {
        async function fetchData() {
            if (_willId) {
                const { data, isError, error } = await useReadContract({
                    address: WillsCreator_CONTRACT_ADDRESS,
                    abi: WillsCreator_CONTRACT_ADDRESS_ABI,
                    functionName: 'getWillStatus',
                    args: [_willId]
                });

                if (data) {
                    setWill_Status(data);
                }

                if (isError) {
                    console.error('Error fetching will status:', error);
                    setWill_Status(null); // Reset state in case of error
                }
            }
        }

        fetchData();
    }, [_willId]);

    return (
        <div>
            {_willId == null && <div><h1>Invalid will id {_willId} passed</h1></div>}
            {will_status !== null && <div><h2>Will Status: {will_status}</h2></div>}
            {will_status === null && <h2>Loading...</h2>}
        </div>
    );
};

// const CompFIndStatus_Will: React.FC<ComponentBProps> = 
// ({ _willId }) => {
//           const [will_status, setWill_Status] = useState<any>()
//           const [will_id, setWill_id] = useState('');

//           useEffect(()=> {
//             setWill_id(_willId);
//            function getter(){
//             const {data, isError,error,isSuccess} = useReadContract({
//               address: WillsCreator_CONTRACT_ADDRESS,
//               abi: WillsCreator_CONTRACT_ADDRESS_ABI,
//               functionName: 'getWillStatus',
//               args: [_willId]
      
//               })
//               if (data){
//                 setWill_Status(data);
//               }
//               console.log(`-willstatus-${_willId}-`)
//               console.log(data)
//               let t = data;
//               console.log(`---------`)
//               console.log(`call success: data from CompFIndStatus_will`)
          
              
//               if(error){
//                 return (
//                   <div><h2>Find Status Error: {error?.message}</h2></div>
//                 )
//               }
          
//            }
//            getter()
//           },[will_id])
//           console.log(`_will_Id passed => ${_willId}`)
         
//           //
//           // refer code at link https://wagmi.sh/core/api/actions/readContract
//           // to use wagmi core
//         // const {data, isError,error,isSuccess} = useReadContract({
//         // address: WillsCreator_CONTRACT_ADDRESS,
//         // abi: WillsCreator_CONTRACT_ADDRESS_ABI,
//         // functionName: 'getWillStatus',
//         // args: [_willId]

//         // })

    
  
//     return (
//     <div>

//         <h2>Loading...</h2>
//   { will_id == null && <div><h1>Invalid will id {_willId} passed </h1></div>}
//         {will_status && <div><h2>Will Status: {will_status}</h2></div>}

//     </div>);
  
// }

export default CompFIndStatus_Will