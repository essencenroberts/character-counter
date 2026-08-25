import type { StatsDisplayProps } from "../../types";

function formatReadingTime(minutes: number): string {
  const wholeMinutes = Math.floor(minutes);
  const seconds = Math.round((minutes - wholeMinutes) * 60);

  return `${wholeMinutes}:${seconds.toString().padStart(2, "0")}`;
}



export const StatsDisplay: React.FC<StatsDisplayProps> = ({
  stats,
  showReadingTime
}) => {
  return (
    <>
      <div className="w-full p-4 rounded-lg display flex justify-around bg-white shadow-lg items-center gap-4">
        <div>
          <p className="text-sm text-gray-500 mb-1">Characters</p>
          <p className="text-3xl font-bold text-slate-700">{stats.characterCount}</p>

        </div>

        <div>
          <p className="text-sm text-gray-500 mb-1">Words</p>
          <p
            className={`text-3xl font-bold ${stats.wordCountBelowMinimum ? "text-red-600" : "text-slate-700" }`}
          >{stats.wordCount}</p>
          
        </div>
        
        {showReadingTime && (
          <div>
            <p className="text-sm text-gray-500">Reading Time</p>
            <p className="text-3xl font-bold text-slate-700">{formatReadingTime(stats.readingTime)}</p>
          </div>
        )}
      </div>
    </>
  );
};

