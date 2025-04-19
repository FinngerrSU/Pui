
import { useCurrentAccount, useCurrentWallet, useSuiClientQuery } from "@mysten/dapp-kit";

import { useSignAndExecuteTransaction } from "@mysten/dapp-kit";
import { Transaction } from "@mysten/sui/transactions";
import { QueryObserverResult } from "@tanstack/react-query";


interface MyObject{
  id: { id: string };
  total_minted: string;
  minted_addresses: string[];
}
interface MintProps {
  refetchSupply: () => Promise<QueryObserverResult>; // Type for the refetch function
}

export function GetSupply(){
  const trackerId = "0x4550a24c139a3c962d67d73ecca78c936bf5be638e8185b1d6ee56c633dacca4";
  const {data, isPending,
    isError,
    error,
    refetch,} = useSuiClientQuery(
    'getObject',
    {
      id:trackerId,
      options:{showType: true,
      showOwner: true,
      showPreviousTransaction: true,
      showDisplay: false,
      showContent: true,
      showBcs: false,
      showStorageRebate: true}
    },
    {
      staleTime: 60_000
    }
  );
  if (isPending) {
    return { totalMinted: '0',isPending, isError, error, refetch,  };
  }
  if (isError) {
    return { totalMinted: '0' ,isPending, isError, error, refetch, };
  }
  const content=data?.data?.content;
  if(content?.dataType==="moveObject" && content.fields){
    const fields=content.fields as unknown as MyObject;
    const totalMinted = fields.total_minted ?? '0';
    return {
      totalMinted,
      isPending,
      isError,
      error,
      refetch,
     
    }
  };
  return {
    totalMinted: '0',
    isPending,
    isError,
    error,
    refetch,
  };
}

export default function Mint({ refetchSupply }: MintProps) {
  const { connectionStatus } = useCurrentWallet();
  const account = useCurrentAccount();
  
  const { mutate: signAndExecuteTx } = useSignAndExecuteTransaction();

  const handleMint = async () => {
    console.log("Mint clicked! Status:", connectionStatus, "Account:", account?.address);
    if (connectionStatus !== "connected" || !account) {
      console.log("Cannot mint - wallet not connected or no account");
      return;
    }
    const tx = new Transaction();
    const packageId = "0xc7f1f37f32f9c539426e10fa6ff1fd1be45b94573f83f8a72e54cdc7072735be";
    const treasuryCapId = "0xbc25dd5fbf3de72b1984b954e9ed365bab3ba3edf3262cc34f8213c58d44af31";
    const trackerID="0x4550a24c139a3c962d67d73ecca78c936bf5be638e8185b1d6ee56c633dacca4";
    const amount = 100000;
    const recipient = account.address;
    
    tx.moveCall({
      target: `${packageId}::pui::mint`,
      
      arguments: [tx.object(treasuryCapId), tx.object(trackerID),tx.pure.u64(amount), tx.pure.address(recipient)],
    });
    console.log("Executing transaction...");
    signAndExecuteTx(
      { transaction: tx },
      { onSuccess: async (result) => {console.log("Success:", result);
        try {
          await refetchSupply(); // Now valid because onSuccess is async
          console.log("Supply Refetch Successful");
        } catch (err) {
          console.error("Supply Refetch Failed:", err);
        }
      },
      onError: (error) => {
        console.error("Mint Failed:", error);
      }
       }
    );
  };

  return (
    <button
      className="mt-4 px-6 py-3 bg-green-400 text-black font-bold text-lg rounded-full hover:bg-green-500 hover:scale-105 transition-all duration-200 shadow-lg"
      onClick={handleMint}
      disabled={connectionStatus !== "connected"}
    >
      MINT NOW
    </button>
  );
}