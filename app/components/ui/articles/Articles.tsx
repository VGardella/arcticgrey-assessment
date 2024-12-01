import type {ArticleType} from 'public/assets/articles/article-content';

export function LatestArticles({articles}: {articles: ArticleType[]}) {
  return (
    <div className="flex m-10 md:justify-center">
      <div className="flex flex-col gap-[50px]">
        <div className="flex justify-between">
          <div className="flex flex-col w-min gap-2">
            <p className="leading-[19px] text-[#1B1F23]">✍️ Blogs</p>
            <div className="w-min whitespace-nowrap">
              <h3 className="font-medium text-[40px] leading-[47px]">
                Latest Articles
              </h3>
            </div>
          </div>
          <div className="view">View All</div>
        </div>
        <div className="grid grid-cols-[800px_700px] gap-5 h-[450px]">
          <div className="">
            {articles
              .filter((item: ArticleType) => item.id === 'principal')
              .map((item: ArticleType) => {
                return (
                  <div
                    className="flex items-end rounded-lg h-full w-[800px]"
                    style={{
                      backgroundImage: `url(${item.imgUrl})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                    key={item.id}
                  >
                    <div className="flex flex-col p-10 gap-8 text-white">
                      <div className="flex flex-col gap-2">
                        <p className="leading-[19px]">{item.topic}</p>
                        <h3 className="font-medium text-2xl leading-7 w-[370px]">
                          {item.title}
                        </h3>
                      </div>
                      <div className="flex gap-3">
                        <p>By {item.creator}</p>
                        <div className="text-[#FFFFFF33]"> | </div>
                        <p>{item.date}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="grid grid-row-2 gap-5">
            {articles
              .filter((item: ArticleType) => item.id.includes('secondary'))
              .map((item: ArticleType) => {
                return (
                  <div className="flex justify-between" key={item.id}>
                    <div
                      className="w-[300px] h-[215] rounded-lg"
                      style={{
                        backgroundImage: `url(${item.imgUrl})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    ></div>
                    <div className="flex flex-col gap-8 justify-center">
                      <p>{item.topic}</p>
                      <div className="flex flex-col gap-8">
                        <h3 className="w-[370px] text-lg font-medium leading-[26px]">
                          {item.title}
                        </h3>
                        <div className="flex gap-3">
                          <p>By {item.creator}</p>
                          <div> | </div>
                          <p>{item.date}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
