export type GoalData = {
  imgUrl: string;
  header: string;
  description: string;
};

const goalsInfo: GoalData[] = [
  {
    imgUrl: '/app/assets/goals/goal1.png',
    header: 'Sleep',
    description: 'Optimize your sleep patterns',
  },
  {
    imgUrl: '/app/assets/goals/goal2.png',
    header: 'Cognitive Function',
    description: "Enhance your brain's performance and connectivity",
  },
  {
    imgUrl: '/app/assets/goals/goal3.png',
    header: 'Foundational Health',
    description: 'Promoting healthy, natural deep sleep day to day',
  },
  {
    imgUrl: '/app/assets/goals/goal4.png',
    header: 'Athletic Performance',
    description: 'Increase your healthy tissue, muscle, and energy',
  },
  {
    imgUrl: '/app/assets/goals/goal5.png',
    header: 'Hormone Support',
    description: 'Boost your mood, libido, and vitality',
  },
];

export default goalsInfo;
