const PRODUCT_VARIANT_FRAGMENT = `#graphql
  fragment ProductVariant on ProductVariant {
    availableForSale
    compareAtPrice {
      amount
      currencyCode
    }
    id
    image {
      __typename
      id
      url
      altText
      width
      height
    }
    price {
      amount
      currencyCode
    }
    product {
      title
      handle
    }
    selectedOptions {
      name
      value
    }
    sku
    title
    unitPrice {
      amount
      currencyCode
    }
  }
` as const;

const COLLECTION_PRODUCTS_FRAGMENT = `#graphql
  fragment CollectionProducts on Product {
    id
    title
    handle
    descriptionHtml
    description
    tags
    variants(first: 1) {
      nodes {
        ...ProductVariant
      }
    }
    metafields (identifiers: { namespace: "shopify", key: "dietary-preferences"}) {
      id
      value
      type
    }
  }
  ${PRODUCT_VARIANT_FRAGMENT}
` as const;

const COLLECTION_FRAGMENT = `#graphql
  fragment Collection on Collection {
    id
    title
    products (first: 4) {
      nodes {
        ...CollectionProducts
      }
    }
  }
  ${COLLECTION_PRODUCTS_FRAGMENT}
`;

export const COLLECTION_QUERY = `#graphql
  ${COLLECTION_FRAGMENT}
  query getCollectionProducts ($handle: String!) {
    collection (handle: $handle) {
      ...Collection
    }
  }
`;
