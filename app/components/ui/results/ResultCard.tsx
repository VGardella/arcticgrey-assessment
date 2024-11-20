import type {ResultsData} from '~/assets/results/results-content';

export function ResultCard({clientInfo}: {clientInfo: ResultsData}) {
  return (
    <div className="flex flex-col gap-4 w-min group">
      <div className="w-[300px] h-[420px] object-fit overflow-hidden rounded-lg group-hover:h-[500px] transition-all duration-500">
        <img src={clientInfo.imgUrl} />
      </div>
      <div className="bg-white rounded-lg flex items-center p-[5px] pr-[15px] justify-between">
        <div className="flex justify-center items-center w-[70px] h-[70px] bg-[#F6F6F5] rounded-md">
          <img
            className="w-[50px] h-[50px]"
            src={clientInfo.item.productImgUrl}
          />
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="text-[13px] text-[#1B1F23] leading-4">
            {clientInfo.item.title}
          </h4>
          <p className="font-medium text-xs leading-[14px] text-[#1B1F23]">
            ${clientInfo.item.price}
          </p>
        </div>
        <button className="flex w-8 h-8 bg-[#1B1F23] rounded-full text-[18px] text-white justify-center items-center">
          +
        </button>
      </div>
    </div>
  );
}
