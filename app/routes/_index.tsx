import {defer, type LoaderFunctionArgs} from '@shopify/remix-oxygen';
import {useLoaderData, type MetaFunction} from '@remix-run/react';
import {flattenConnection} from '@shopify/hydrogen';
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
import type {ProductVariantFragment} from 'storefrontapi.generated';
import type {MoneyV2} from '@shopify/hydrogen/customer-account-api-types';
import {AutomaticCarousel} from '~/components/ui/carousel/AutomaticCarousel';
import {BundlesSection} from '~/components/ui/products/BundlesSection';
import {SupplementSection} from '~/components/ui/products/SupplementSection';
import {ResultsSection} from '~/components/ui/results/ResultsSection';
import resultList from 'public/assets/results/results-content';

export const meta: MetaFunction = () => {
  return [{title: 'Hydrogen | Home'}];
};

type ProductMetafield = {
  id: string | null;
  namespace: string | null;
  key: string | null;
  value: string | null;
};

type CollectionsData = {
  id: string;
  handle: string;
};

export type EdgeNode<T> = {
  edges: {
    node: T;
  }[];
};

export type ProductNode = {
  id: string;
  images: EdgeNode<ProductVariantFragment['image']>;
  description: string;
  productType: string;
  tags: string[];
  title: string;
  category: {
    id: string;
    name: string;
  };
  priceRange: {
    maxVariantPrice: MoneyV2;
  };
  availableForSale: boolean;
  metafields: ProductMetafield[];
  collections: EdgeNode<CollectionsData>;
};

type ProductListPromise = {
  products: EdgeNode<ProductNode>;
};

async function loadCtiricalData({
  context,
}: LoaderFunctionArgs): Promise<ProductListPromise> {
  const productList = context.storefront
    .query(PRODUCTS_QUERY)
    .catch((error) => {
      console.error(error);
      return null;
    });

  return productList;
}

export async function loader(args: LoaderFunctionArgs) {
  const deferredData = await loadCtiricalData(args);

  return defer({...deferredData});
}

const PRODUCTS_QUERY = `#graphql
  query {
    products(first: 20) {
      edges {
        node {
          id
          images(first: 1) {
            edges {
              node {
                id
                url
                altText
                width
                height
              }
            }
          }
          description
          productType
          tags
          title
          category {
            id
            name
          }
          priceRange {
            maxVariantPrice {
              amount
              currencyCode
            }
          }
          availableForSale
          metafields(
          identifiers: [
            { namespace: "shopify--dietary-preferences", key: "label" }
          ]
          ) {
            id
            key
            value
            namespace
          }
          collections (first: 5) {
              edges {
                  node {
                      id
                      handle
                      }
                  }
              }
          }
        }
      }
    }
`;

export default function Homepage() {
  const data = useLoaderData<typeof loader>();
  const products = flattenConnection(data.products) as ProductNode[];
  return (
    <div className="home">
      <HeroSection animationContent={carouselText} />
      <GoalSection goalsInfo={goalsInfo} />
      <SupplementSection
        suppInfo={supplementMarketing}
        productList={products}
        handle="supplements"
      />
      <ResultsSection results={resultList} />
      <BundlesSection productList={products} handle="bundles" />
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
