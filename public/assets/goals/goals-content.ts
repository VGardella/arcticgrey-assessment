export type GoalData = {
  id?: number;
  imgUrl: string;
  header: string;
  description: string;
};

const goalsInfo: GoalData[] = [
  {
    id: 1,
    imgUrl: '/../assets/goals/goal1.png',
    header: 'Sleep',
    description: 'Optimize your sleep patterns',
  },
  {
    id: 2,
    imgUrl: '/../assets/goals/goal2.png',
    header: 'Cognitive Function',
    description: "Enhance your brain's performance and connectivity",
  },
  {
    id: 3,
    imgUrl: '/../assets/goals/goal3.png',
    header: 'Foundational Health',
    description: 'Promoting healthy, natural deep sleep day to day',
  },
  {
    id: 4,
    imgUrl: '/../assets/goals/goal4.png',
    header: 'Athletic Performance',
    description: 'Increase your healthy tissue, muscle, and energy',
  },
  {
    id: 5,
    imgUrl: '/../assets/goals/goal5.png',
    header: 'Hormone Support',
    description: 'Boost your mood, libido, and vitality',
  },
];

export default goalsInfo;
