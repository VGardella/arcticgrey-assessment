export function RecomendedBanner() {
  return (
    <div className="flex justify-between h-28 py-6 bg-[#F6F6F5] divide-x divide-[#1B1F231A] overflow-hidden">
      <div className="flex flex-col gap-3 ml-10 h-[70px] w-[400px]">
        <div className="">
          <div className="border border-black bg-[#E4E4E4] rounded-lg p-3 text-sm font-semibold w-[198px]">
            #1 Doctor Recommended
          </div>
        </div>
        <div className="flex h-5 gap-3 items-center">
          <div className="flex">
            {Array.from({length: 5}).map((_, index) => (
              <div key={index} className="w-5 h-5">
                <img src="/app/assets/golden-star.png" />
              </div>
            ))}
          </div>
          <div>12,000+ 5-star Reviews</div>
        </div>
      </div>
      <div className="flex h-10 gap-2 ml-auto mr-16 self-center">
        <img
          src="/app/assets/hero/rolling-stones.png"
          className="w-auto h-auto object-contain"
        />
        <img
          src="/app/assets/hero/mens-journal.png"
          className="w-auto h-auto object-contain"
        />
        <img
          src="/app/assets/hero/la-weekly.png"
          className="w-auto h-auto object-contain"
        />
        <img
          src="/app/assets/hero/herb.png"
          className="w-auto h-auto object-contain"
        />
        <img
          src="/app/assets/hero/ny-times.png"
          className="w-auto h-auto object-contain"
        />
        <img
          src="/app/assets/hero/bbc.png"
          className="w-auto h-auto object-contain"
        />
        <img
          src="/app/assets/hero/rolling-stones.png"
          className="w-auto h-auto object-contain"
        />
        <img
          src="/app/assets/hero/mens-journal.png"
          className="w-auto h-auto object-contain"
        />
      </div>
    </div>
  );
}
