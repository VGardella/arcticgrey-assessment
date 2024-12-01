import {BundlesSelection} from '../../products/BundleSelection';
import type {CollectionQuery} from 'storefrontapi.generated';

export function BundlesSection({
  productList,
}: {
  productList: Promise<CollectionQuery>;
}) {
  return (
    <div className="flex flex-col md:items-center">
      <BundlesSelection productList={productList} />
    </div>
  );
}
