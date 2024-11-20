import type {GoalData} from '~/assets/goals/goals-content';

export function GoalCard({imgUrl, header, description}: GoalData) {
  return (
    <div className="flex flex-col h-min w-[288px] gap-6">
      <img className="h-[390px] w-[288px] rounded-lg" src={imgUrl} />
      <div className="flex justify-between h-min">
        <div className="flex flex-col gap-2 h-min w-full">
          <h3 className="w-[250px] h-[21px] font-semibold text-lg leading-[21px]">
            {header}
          </h3>
          <p className="w-[250px] h-[38px] leading-[18px]">{description}</p>
        </div>
        <div className="">
          <button className="w-[37px]">
            <img src="/app/assets/goals/flecha.png" />
          </button>
        </div>
      </div>
    </div>
  );
}
