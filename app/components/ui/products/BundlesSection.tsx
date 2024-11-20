import type {ProductNode} from '~/routes/_index';
import {BundlesSelection} from '../../products/BundleSelection';

export function BundlesSection({
  productList,
  handle,
}: {
  productList: ProductNode[];
  handle: string;
}) {
  return (
    <div className="flex flex-col md:items-center">
      <BundlesSelection productList={productList} handle={handle} />
    </div>
  );
}
