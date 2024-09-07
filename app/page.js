"use client"
import { useState } from "react";

import Middle from "./comopents/Middle";
import Navbar from "./comopents/Navbar";
import Right from "./comopents/Right";
import Sidebar from "./comopents/Sidebar";

export default function Home() {
  const [rank, setRank] = useState(0);
  const [percentile, setPercentile] = useState(0);
  const [correct, setCorrect] = useState(0);

  const handleSaveScore = (newRank, newPercentile, newCorrect) => {
    setRank(newRank);
    setPercentile(newPercentile);
    setCorrect(newCorrect);
  };
  return (
    <div className="w-full flex flex-col h-full">
      <div className="w-full flex flex-col h-20 border-2 border-zinc-300">
        <Navbar className="flex flex-col" />
      </div>
      <div className="flex flex-row w-full min-h-screen">
        <Sidebar className="flex" />
        <Middle
          className="flex"
          rank={rank}
          percentile={percentile}
          correct={correct}
          onSaveScore={handleSaveScore}
        />
        <Right className="flex" correct={correct} />
      </div>
      {/* <div className="left-0 flex flex-col w-1/6 bg-red-500 min-h-screen h-1/2"></div> */}
    </div>
  );
}
