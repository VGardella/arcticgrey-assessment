import type {ResultsData} from '~/assets/results/results-content';
import {ResultCard} from './ResultCard';

export function ResultReel({results}: {results: ResultsData[]}) {
  return (
    <div className="flex items-center h-[650px] -ml-[150px] gap-[10px]">
      {results.map((result) => (
        <ResultCard clientInfo={result} />
      ))}
    </div>
  );
}