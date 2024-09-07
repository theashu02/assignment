"use client"
import Image from "next/image";
import React from "react";
import { useState } from "react";
import { FaTrophy } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { FaCheckSquare } from "react-icons/fa";
import UpdateScoresModal from "./UpdateScores.js";
import ComparisonGraph from "./ComparisonGraph.js";

export default function Middle({ rank, percentile, correct, onSaveScore }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const handleSaveScore = (newRank, newPercentile, newCorrect) => {
    onSaveScore(newRank, newPercentile, newCorrect);
    handleCloseModal();
  };

  return (
    <div className="flex flex-col bg-white ml-11 w-2/4 space-y-6">
      <div className="flex justify-start items-center h-10 bg-white mt-8">
        <h1 className="font-bold">Skill Test</h1>
      </div>

      <div className="flex flex-row bg-white h-1/6 rounded-md justify-between items-center border-2 border-zinc-300">
        <div className="flex ml-4">
          <Image src="/assets/HTML.png" alt="My Image" width={50} height={50} />
        </div>
        <div>
          <h1 className="font-bold">Hyper Text Markup Language</h1>
          <h1>Question: 08 | Duration: 15mins | Submitted on 5 June 2021</h1>
        </div>
        <div className="flex mr-5">
          <button
            onClick={handleOpenModal}
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              border: "none",
              backgroundColor: "#1d4ed8",
              color: "#fff",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Update
          </button>
        </div>
      </div>

      {/* second div */}
      <div className="flex flex-col border-2 border-zinc-300 h-1/6 rounded-md space-y-3">
        <div>
          <h1 className="font-extrabold ml-7 mt-3">Quick Statistics</h1>
        </div>
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row justify-between space-x-3 items-center ml-12">
            <div className="flex rounded-full bg-slate-300 pt-2 pb-2 pr-2 pl-2">
              <FaTrophy className="w-8 h-8" />
            </div>
            <div className="flex flex-col justify-center">
              <div>
                <h1 className="font-extrabold text-xl">{rank}</h1>{" "}
                {/* Updated rank */}
              </div>
              <div>Your Rank</div>
            </div>
          </div>
          <div className="flex flex-row justify-between space-x-3 items-center">
            <div className="flex rounded-full bg-slate-300 pt-2 pb-2 pr-2 pl-2">
              <SlCalender className="w-8 h-8" />
            </div>
            <div className="flex flex-col justify-center">
              <div>
                <h1 className="font-extrabold text-xl">{percentile}%</h1>{" "}
                {/* Updated percentile */}
              </div>
              <div>Percentile</div>
            </div>
          </div>
          <div className="flex flex-row justify-between space-x-3 items-center mr-12">
            <div className="flex rounded-full bg-slate-300 pt-2 pb-2 pr-2 pl-2">
              <FaCheckSquare className="w-8 h-8" />
            </div>
            <div className="flex flex-col justify-center">
              <div>
                <h1 className="font-extrabold text-xl">
                  {correct}/{15}
                </h1>{" "}
                {/* Updated correct answers */}
              </div>
              <div>Correct Answer</div>
            </div>
          </div>
        </div>
      </div>
      {/* for graph */}
      <UpdateScoresModal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        onSave={handleSaveScore}
        initialRank={rank}
        initialPercentile={percentile}
        initialScore={correct}
      />
      <div className="flex flex-row h-2/4 rounded-md border-2 border-zinc-300">
        <ComparisonGraph userPercentile={percentile} averagePercentile={72} />
      </div>
    </div>
  );
}
