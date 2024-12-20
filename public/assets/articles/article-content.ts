export type ArticleType = {
  id: string;
  imgUrl: string;
  topic: string;
  title: string;
  creator: string;
  date: string;
};

const articleContent: ArticleType[] = [
  {
    id: 'principal',
    imgUrl: '/../assets/articles/principal.jpg',
    topic: 'Balanced Diet',
    title: 'Foundational Supplements: Build a Better You',
    creator: 'Emily Thompson',
    date: 'August 31, 2023',
  },
  {
    id: 'secondary-1',
    imgUrl: '/../assets/articles/secondary1.jpg',
    topic: 'Balanced Diet',
    title:
      'Taming the Fire Within: Everything You Need to Know About Inflammation',
    creator: 'Emily Thompson',
    date: 'August 31, 2023',
  },
  {
    id: 'secondary-2',
    imgUrl: '/../assets/articles/secondary2.jpg',
    topic: 'Balanced Diet',
    title: 'Optimize Your Sleep with These 15 Strategies',
    creator: 'Emily Thompson',
    date: 'August 31, 2023',
  },
];

export default articleContent;
