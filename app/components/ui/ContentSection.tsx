import {LatestArticles} from './articles/Articles';
import {FollowInstagram} from './FollowInstagram';
import type {InstaImagesType} from 'public/assets/insta/insta-content';
import type {ArticleType} from 'public/assets/articles/article-content';

export function AlternativeContent({
  imgSup,
  imgInf,
  artList,
}: {
  imgSup: InstaImagesType[];
  imgInf: InstaImagesType[];
  artList: ArticleType[];
}) {
  return (
    <div className="flex flex-col">
      <LatestArticles articles={artList} />
      <FollowInstagram imgSup={imgSup} imgInf={imgInf} />
    </div>
  );
}
