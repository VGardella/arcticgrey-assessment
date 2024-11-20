export type SupplData = {
  id: number;
  imgUrl: string;
  title: string;
  description: string;
};

const supplementMarketing: SupplData[] = [
  {
    id: 1,
    imgUrl: '/app/assets/supplements/easy.png',
    title: 'We Make It Easy',
    description:
      'Personalized Solutions & Guidance Mean You Get Just What You Need Nothing More',
  },
  {
    id: 2,
    imgUrl: '/app/assets/supplements/clean.png',
    title: 'Clean & Effective',
    description:
      'Proven Ingredients, not Artificial, Crafted By Experts For Optimal Effectiveness',
  },
  {
    id: 3,
    imgUrl: '/app/assets/supplements/consultation.png',
    title: 'Your Free Dietitian',
    description:
      'Every Gainful Subscriber Gets Free, 1:1 Access Their Own Registered Dietitian.',
  },
  {
    id: 4,
    imgUrl: '/app/assets/supplements/madeforyou.png',
    title: 'Made For You',
    description:
      'Performance is Personal. Personalized & Customizable Products For Your Needs, Body & Goals',
  },
];

export default supplementMarketing;
