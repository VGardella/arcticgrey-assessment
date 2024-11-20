import type {ResultsData} from '~/assets/results/results-content';
import {ResultReel} from './ResultReel';

export function ResultsSection({results}: {results: ResultsData[]}) {
  return (
    <div className="flex flex-col justify-center bg-[#F6F6F5] pb-[50px] pt-[75px] gap-10">
      <div className="flex flex-col items-center gap-[18px]">
        <div className="flex gap-[50px]">
          <button className="w-10 h-10 bg-[#F5F5F5] border border-[#1B1F231A] rounded cursor-pointer">
            <img className="h-[10px] m-auto" src="/app/assets/arrow-l.png" />
          </button>
          <div className="flex flex-col gap-2 items-center">
            <p>Trusted & Proven by Science</p>
            <div>
              <h3 className="text-[40px] leading-[48px] font-medium text-[#1B1F23]">
                Real People. Real Results.
              </h3>
            </div>
          </div>
          <button className="w-10 h-10 bg-[#F5F5F5] border border-[#1B1F231A] rounded cursor-pointer">
            <img className="h-[10px] m-auto" src="/app/assets/arrow-r.png" />
          </button>
        </div>
        <p className="leading-[19px] underline text-[#1B1F23]">View All</p>
      </div>
      <ResultReel results={results} />
    </div>
  );
}
