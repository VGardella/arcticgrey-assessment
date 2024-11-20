import {LatestArticles} from './articles/Articles';
import {FollowInstagram} from './FollowInstagram';
import type {InstaImagesType} from '~/assets/insta/insta-content';
import type {ArticleType} from '~/assets/articles/article-content';

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
