import Image from "next/image"; 

export default function Page() {
  return (
    <main className="font-mono min-h-dvh
     bg-gradient-to-br from-purple-900 via-pink-600 to-yellow-400 text-white p-4">
      {/* Header Section */}
      <header className="flex flex-col items-center justify-center py-8 sm:py-12">
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-wider animate-bounce drop-shadow-lg">
          🤑 Pussy on Sui 🤑
        </h1>
        <p className="mt-2 text-lg sm:text-2xl font-mono text-yellow-200">
          The dankest memecoin to hit the blockchain!
        </p>
      </header>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto flex flex-col gap-8 sm:gap-12 md:flex-row items-center justify-center">
        {/* Hype Text */}
        <div className="flex flex-col gap-4 text-center md:text-left md:w-1/2">
          <p className="text-2xl sm:text-4xl font-bold uppercase bg-black bg-opacity-50 p-4 rounded-xl">
            TO THE MOON 🚀
          </p>
          <p className="text-lg sm:text-xl text-yellow-100">
            Join the memecoin revolution! Mint MOONCOIN, flex on the haters, and stack those gains. 
            <span className="text-green-300 font-bold"> 1000x vibes only.</span>
          </p>
          <button className="mt-4 px-6 py-3 bg-green-400 text-black font-bold text-lg rounded-full hover:bg-green-500 hover:scale-105 transition-all duration-200 shadow-lg ">
            MINT NOW
          </button>
        </div>

        {/* Meme Image */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80">
            <Image
              src="/pui.png" 
              alt="Doge Mooncoin Mascot"
              layout="fill"
              
              className="w-full h-full object-cover rounded-full border-4 border-yellow-300 animate-spin-slow"
            />
            
          </div>
        </div>
      </div>

      
    </main>
  );
}

