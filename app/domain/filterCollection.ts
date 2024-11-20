import type {ProductNode} from '~/routes/_index';

export function filterCollection({
  productList,
  handle,
}: {
  productList: ProductNode[];
  handle: string;
}): ProductNode[] {
  return productList.filter((product) =>
    product.collections.edges.some(
      (collection) => collection.node.handle === handle,
    ),
  );
}
