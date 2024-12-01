import type {GoalData} from 'public/assets/goals/goals-content';
import {GoalCard} from './GoalCard';

export function GoalSection({goalsInfo}: {goalsInfo: GoalData[]}) {
  return (
    <div className="flex flex-col mx-10 my-20 w-auto h-min gap-10">
      <div className="flex flex-col w-[400px] self-center text-center gap-2">
        <h3 className="font-normal">COMFORTABLY UNCOMFORTABLE</h3>
        <div className="flex flex-col items-center gap-4">
          <h2 className="font-medium text-[40px] leading-[47px] w-[404px]">
            Start with your Goals
          </h2>
          <p className="w-[350px] leading-6">
            We cannot become what we want to be by remaining what we are.
          </p>
        </div>
      </div>
      <div className="flex h-min gap-5 md:justify-center">
        {goalsInfo.map((item: GoalData) => {
          return (
            <GoalCard
              key={item.id}
              imgUrl={item.imgUrl}
              header={item.header}
              description={item.description}
            />
          );
        })}
      </div>
    </div>
  );
}
