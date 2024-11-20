import type {SupplData} from '~/assets/supplements/clean-supplements';

export function SupplementInfo({suppInfo}: {suppInfo: SupplData[]}) {
  return (
    <div className="flex flex-col mx-10 my-20 gap-[50px] h-min md:justify-center w-min">
      <div className="flex flex-col gap-2 h-min w-min">
        <div className="">🧐 Why Health & Fitness</div>
        <div className="font-medium text-[40px] leading-[47px] w-[419px] h-[94px]">
          Clean Supplements - Made For You
        </div>
      </div>
      <div className="flex gap-8 w-min">
        {suppInfo.map((item: SupplData) => {
          return (
            <div className="flex flex-col gap-6">
              <img className="w-[50px] h-[50px]" src={item.imgUrl} />
              <div className="flex flex-col gap-4">
                <h3 className="h-[21px] text-lg font-medium">{item.title}</h3>
                <p className="w-[356px] h-min leading-6">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
