import { Table } from "@mantine/core";
import { BigNumberish } from "ethers";



import {
  WillsCreator_CONTRACT_ADDRESS,
  WillsCreator_CONTRACT_ADDRESS_ABI,
} from "../SrcConstants_Wills";

import { Button } from "@mantine/core";
import { useState } from "react";
import { useAccount, useContractRead, useWriteContract } from "wagmi";
import { useRouter as navUseRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { useNavigate, useParams } from "react-router-dom";

import { watchContractEvent } from '@wagmi/core'
import { config } from '@/wagmi'
import { abi_willCreator } from './abiwillCreator';
import { abi } from './abi';

interface IWillsInfo {
  willId: BigNumberish;
  assetId: string;
  s_baseStatus: string;
  willStartDate: BigNumberish;
  willMaturityDate: BigNumberish;
  Benefitors: number;
  willOwner: BigInteger;
  willManager: BigInteger;
}
function GetWillsByUsers(stttt: any) {
  const { data: functionData, status } = useContractRead({
    address: WillsCreator_CONTRACT_ADDRESS,
    abi: WillsCreator_CONTRACT_ADDRESS_ABI,
    functionName: "getUserCreatedBonds",
    args: [stttt],
  });

  console.log("---getUserCreatedBonds-----");
  console.log(functionData);
  console.log("---------------");
  let retData: IWillsInfo[];
  retData = functionData as Array<IWillsInfo>;
  console.log(retData);
  return retData;
}

function GetWilStatus(willId: any) {
  const { data: functionData, status } = useContractRead({
    address: WillsCreator_CONTRACT_ADDRESS,
    abi: WillsCreator_CONTRACT_ADDRESS_ABI,
    functionName: "getWillStatus",
    args: [willId],
  });

  console.log("---getUserCreatedBonds-----");
  console.log(functionData);
  console.log("---------------");
  let retData: any;
  retData = functionData;

  return retData;
}

function CompManageWillsSettle() {
  // const router = useNavigate();
  //const router = routUseRouter();
  const router = navUseRouter();
  const searchParams = useSearchParams();
  const { writeContract } = useWriteContract()
  const [willInfoData, setWillInfoData] = useState(null);

  const { address, connector, isConnected } = useAccount();
  const [assetId, setAssetId] = useState("");
  const [willId, setWillId] = useState("");
  /**
  event willSettled(
    uint indexed cryptoWillId,
    address indexed benefitor,
    uint256 willMaturityDate,
    uint256 willAmount
);
  */

  setWillId(searchParams.get("willId"));
  const unwatch_will_settled = watchContractEvent(config, {
    address: WillsCreator_CONTRACT_ADDRESS, //'0x7a92beDE8B87dD09C8dB1C979647f599f5AeBb14',
    abi:WillsCreator_CONTRACT_ADDRESS_ABI,
    eventName: 'willSettled',
    onLogs(log) {
      console.log("listening to event assetCreated");
      console.log(log);
      console.log(`willSettled-watchContractEventEnds--------------`);
      // console.log(log[0].args.cryptoWillId);
      // console.log(log[0].args.willMaturityDate);
      // console.log(log[0].args.benefitor);
      // console.log(logs[0].args.willId)
      // console.log(logs[0].args.willOwner)
      // console.log(logs[0].args.willMaturityDate)
      // console.log(logs[0].args.AssetAmount)
    },
    onError(error) { 
      console.error('Logs error', error) 
    }, 
  })
  unwatch_will_settled();
  // const contract = getContract({
  //   address: WillsCreator_CONTRACT_ADDRESS,
  //   abi: WillsCreator_CONTRACT_ADDRESS_ABI,
  // });

  // const navigate = useNavigate();
  const handleSettleNotification = async () => {
    let willsId = searchParams.get("willId");
    // setWillId(willsId)
    console.log("---handleProceed---");

    console.log(`before Manual settle=> ${address}`);

    try {

      
      const result  = await writeContract( {
        abi,
        address: WillsCreator_CONTRACT_ADDRESS,
        //WillsCreator_CONTRACT_ADDRESS_ABI
        functionName: 'manuallySettleWill',
        arg:  [BigInt(willId)],
        //chainId: 80001,
        account: address,
        
      });

      console.log(`result of contractprepare=> %% ${result} %%`);

    } catch (error) {

      console.log(`write--manuallySettlewill`)
      console.log(error)
    }

        
    
    console.log(willsId);
    console.log("----------");
    // router.push(`/pageWillsManagerDetails?${createQueryString('willsId',will)}`)
    // navigate("/WillsFormEdit",
    //   {
    //     state: {
    //       userId: willsId,
    //     }
    //   }
    //   );
    // };
  };

  // main function start
  try {
    console.log(`addresss -----> ${address}`);
    let willStatus = GetWilStatus(searchParams.get("willId"));
    return (
      <div className="App">
        <h2>Wills Manual Settle by User</h2>
        {!address && <div>Account Not connected</div>}

        <h1>id ...{searchParams.get("willId")}...</h1>
        <h2>will Status {willStatus}</h2>
        {willStatus == "Started" && (
          <Button onClick={handleSettleNotification}>Settle will</Button>
        )}
      </div>
    );
  } catch (error) {
    console.log(`Ex-10: GetWillsByUsers - ${error}`);
  }
  return null;
}

export default CompManageWillsSettle;
