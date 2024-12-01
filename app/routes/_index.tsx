import {defer, type LoaderFunctionArgs} from '@shopify/remix-oxygen';
import {useLoaderData, type MetaFunction} from '@remix-run/react';
import {HeroSection} from '~/components/ui/hero/HeroSection';
import carouselText from 'public/assets/hero/carousel-text';
import {GoalSection} from '~/components/ui/goals/Goals';
import {CustomizedProduct} from '~/components/ui/products/CustomizedProduct';
import {NextGenSection} from '~/components/ui/NextGeneration';
import {AlternativeContent} from '~/components/ui/ContentSection';
import goalsInfo from 'public/assets/goals/goals-content';
import supplementMarketing from 'public/assets/supplements/clean-supplements';
import {
  instaImagesInferior,
  instaImagesSuperior,
} from 'public/assets/insta/insta-content';
import articleContent from 'public/assets/articles/article-content';
import {BundlesSection} from '~/components/ui/products/BundlesSection';
import {SupplementSection} from '~/components/ui/products/SupplementSection';
import {ResultsSection} from '~/components/ui/results/ResultsSection';
import resultList from 'public/assets/results/results-content';
import {COLLECTION_QUERY} from '~/graphql/products/CollectionProductsQuery';

export const meta: MetaFunction = () => {
  return [{title: 'Hydrogen | Home'}];
};

export async function loader(args: LoaderFunctionArgs) {
  const deferredData = loadDeferredData(args);

  const criticalData = await loadCriticalData(args);
  return defer({...deferredData, ...criticalData});
}

async function loadCriticalData({context}: LoaderFunctionArgs) {
  const principalCollection = await Promise.all([
    context.storefront.query(COLLECTION_QUERY, {
      variables: {handle: 'supplements'},
    }),
  ]);

  return {
    principalCollection: principalCollection[0],
  };
}

function loadDeferredData({context}: LoaderFunctionArgs) {
  const secondaryCollection = context.storefront
    .query(COLLECTION_QUERY, {
      variables: {handle: 'bundles'},
    })
    .catch((error) => {
      console.error(error);
      return null;
    });
  return {
    secondaryCollection,
  };
}

export default function Homepage() {
  const data = useLoaderData<typeof loader>();

  return (
    <div className="home">
      <HeroSection animationContent={carouselText} />
      <GoalSection goalsInfo={goalsInfo} />
      <SupplementSection
        suppInfo={supplementMarketing}
        productList={data.principalCollection.collection.products.nodes}
      />
      <ResultsSection results={resultList} />
      <BundlesSection productList={data.secondaryCollection} />
      <CustomizedProduct />
      <NextGenSection />
      <AlternativeContent
        imgSup={instaImagesSuperior}
        imgInf={instaImagesInferior}
        artList={articleContent}
      />
    </div>
  );
}
