import React from 'react';
import QuestionAnalysis from './QuestionAnalysis.js';

export default function Right({ correct }) {
  const totalQuestions = 15; // Define total questions

  const ProgressBar = ({ label, percentage, color }) => {
    return (
      <div className="mb-4">
        <div className="flex justify-between mb-1">
          <span className="text-base font-medium">{label}</span>
          <span className="text-base font-medium">{percentage}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className={`h-2.5 rounded-full ${color}`}
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
    );
  };

  const syllabusData = [
    { label: 'HTML Tools, Forms, History', percentage: 80, color: 'bg-blue-500' },
    { label: 'Tags & References in HTML', percentage: 60, color: 'bg-orange-500' },
    { label: 'Tables & References in HTML', percentage: 24, color: 'bg-red-500' },
    { label: 'Tables & CSS Basics', percentage: 96, color: 'bg-green-500' },
  ];

  return (
    <div className="flex flex-col container mx-auto p-4 ml-11 w-1/3 space-y-6 h-1/4">
      <div className="flex flex-col space-y-16 mt-20">
        <div className="mx-auto p-4 bg-white rounded-lg w-full h-2/3 border-2 border-zinc-300">
          <h2 className="text-xl font-bold mb-4">Syllabus Wise Analysis</h2>
          {syllabusData.map((item) => (
            <ProgressBar
              key={item.label}
              label={item.label}
              percentage={item.percentage}
              color={item.color}
            />
          ))}
        </div>
        <div className="flex flex-col space-y-2 border-2 border-zinc-300 rounded-lg">
          <div className="bg-white rounded-lg p-4">
            <div className="flex flex-row items-center justify-between">
              <div>
                <h3 className='font-bold'>Question Analysis</h3>
              </div>
              <div>
                <p className="mt-2 text-blue-600 font-extrabold">{correct}/15</p>
              </div>
            </div>
          </div>
          <div>
            <QuestionAnalysis
              correctAnswers={correct}
              totalQuestions={totalQuestions}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
