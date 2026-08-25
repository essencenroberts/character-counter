import { useState } from "react";
import { StatsDisplay } from "../StatsDisplay/StatsDisplay";
import TextInput from "../TextInput/TextInput";
import type { CharacterCounterProps, TextStats } from "../../types";


function CharacterCounter({
  minWords = 25,
  maxWords = 100,
  targetReadingTime,
}: CharacterCounterProps) {
  const [text, setText] = useState("");

  const handleTextChange = (newText: string) => {
    setText(newText)
  };

  const characterCount = text.length;

  //split use trim()
  const wordCount = text.trim() === ""
  ? 0
  : text.trim().split(/\s+/).filter(Boolean).length;

  // readingTime Math.ceil to round up 
  const readingTime = wordCount / 200;

  const wordCountBelowMinimum = wordCount < minWords;

  // TextStas interface shape
  const stats: TextStats = {
    characterCount,
    wordCount,
    readingTime,
    wordCountBelowMinimum,
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-8 bg-white rounded-2xl shadow-lg flex flex-col gap-6">

      <h2 className="text-2xl font-bold text-center text-slate-700">Character Counter</h2>
      <TextInput onTextChange={handleTextChange} />

      
         <StatsDisplay stats={stats} showReadingTime={true} />
        
          {maxWords && (
            <p className="text-sm text-gray-400 flex flex-col items-center">
              Min: {minWords} | Max: {maxWords}
            </p>
          )}
        {/* {maxWords && wordCount > maxWords && (
          <p className="text-red-600 text-sm text-center">You're over the {maxWords} word limit.</p>
        )}
        {wordCount < minWords && (
          <p className="text-gray-500 text-sm text-center">
            {minWords - wordCount} more word(s) to reach the minimum.
          </p>
        )} */}
  
      

    </div>
  );
}

export default CharacterCounter;