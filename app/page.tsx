"use client";
import { ConnectButton} from "@mysten/dapp-kit";
import Mint from "./mint";

import { GetSupply } from "./mint";
import Image from "next/image"; 

function formatNumberWithCommas(value: string | number): string {
  // Convert to number, default to 0 if invalid
  const num = Number(value);
  if (isNaN(num)) {
    return '0';
  }
  return num.toLocaleString('en-US'); // Adds commas (e.g., 1000000 -> 1,000,000)
}

export default function Page() {
  const { totalMinted, refetch } = GetSupply();
  return (
    <main className="font-mono min-h-dvh
     bg-gradient-to-br from-purple-900 via-pink-600 to-yellow-400 text-white p-4">
      {/* Header Section */}
      <header className="flex flex-col items-center justify-center py-8 sm:py-12">
        
        <h1 className="flex flex-row text-4xl sm:text-6xl font-extrabold items-center tracking-wider animate-bounce drop-shadow-lg">
        <Image
        src="/pui.png"
        alt="Pui logo"
        width={44}
        height={44}
        className="rounded-full m-4"
        />
          Pussy on Sui 
        <Image
        src="/pui.png"
        alt="Pui logo"
        width={44}
        height={44}
        className="rounded-full m-4"
        />
        </h1>
        
        <p className="mt-2 tracking-[.25em] text-lg sm:text-2xl text-yellow-200">
          Every pussy has a price!
        </p>
      </header>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto flex flex-col gap-8 sm:gap-12 md:flex-row items-center justify-center">
        {/* Hype Text */}
        <div className="flex flex-col gap-4 text-center md:w-1/2">
          <div className="flex flex-row-reverse">
            
            <div className=" flex flex-row-reverse items-center text-2xl sm:text-4xl font-bold uppercase p-4 pr-10 bg-black plrounded-xl">
             <p className=" flex items-center space-x-2">
                <span className="">/4,000,000,000</span>
                <Image
                  src="/pui.png"
                  alt="Pui logo"
                  width={44}
                  height={44}
                  className="rounded-full"
                />
              </p>
             <div >{formatNumberWithCommas(totalMinted)}</div>
            
            </div>
            
            
            </div>
          <p className="text-lg sm:text-xl text-yellow-100">
          If a key can open many locks, people would say that key is awesome. If a lock can be opened by many keys, then that lock has a big problem.
            <span className="text-green-300 font-bold"> 10,000 coin/address.</span>
          </p>
          <Mint refetchSupply={refetch}/>


          
          <ConnectButton className="hover:scale-106 duration-200"/>

          
        </div>

        {/* Meme Image */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80">
            <Image
              src="/pui.png" 
              alt="Pui Coin"
              layout="fill"
              
             className="w-full h-full object-cover rounded-full border-4 border-yellow-300 motion-reduced:animate-spin"
            />
            
          </div>
        </div>
      </div>
      <div className="flex flex-col p-40 items-center justify-center">
        <div className="flow-root my-4">
          Let me tell you something...
        </div>
        <div className="flow-root my-4">
          There're 4 billion pussies in this world
        </div>
        <div className="">
          
        </div>
      </div>
      
    </main>
  );
}

