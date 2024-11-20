export type ResultsData = {
  id: string;
  imgUrl: string;
  item: {
    productImgUrl: string;
    price: string;
    title: string;
  };
};

const resultList: ResultsData[] = [
  {
    id: 'results1',
    imgUrl: '/app/assets/results/results3.png',
    item: {
      productImgUrl: '/app/assets/results/magtein.png',
      price: '49.95',
      title: 'Magnesium L-Threonate',
    },
  },
  {
    id: 'results2',
    imgUrl: '/app/assets/results/results1.png',
    item: {
      productImgUrl: '/app/assets/results/magtein.png',
      price: '49.95',
      title: 'Magnesium L-Threonate',
    },
  },
  {
    id: 'results3',
    imgUrl: '/app/assets/results/results2.png',
    item: {
      productImgUrl: '/app/assets/results/magtein.png',
      price: '49.95',
      title: 'Magnesium L-Threonate',
    },
  },
  {
    id: 'results4',
    imgUrl: '/app/assets/results/results3.png',
    item: {
      productImgUrl: '/app/assets/results/magtein.png',
      price: '49.95',
      title: 'Magnesium L-Threonate',
    },
  },
  {
    id: 'results5',
    imgUrl: '/app/assets/results/results4.png',
    item: {
      productImgUrl: '/app/assets/results/magtein.png',
      price: '49.95',
      title: 'Magnesium L-Threonate',
    },
  },
  {
    id: 'results6',
    imgUrl: '/app/assets/results/results5.png',
    item: {
      productImgUrl: '/app/assets/results/magtein.png',
      price: '49.95',
      title: 'Magnesium L-Threonate',
    },
  },
  {
    id: 'results7',
    imgUrl: '/app/assets/results/results3.png',
    item: {
      productImgUrl: '/app/assets/results/magtein.png',
      price: '49.95',
      title: 'Magnesium L-Threonate',
    },
  },
];

export default resultList;
