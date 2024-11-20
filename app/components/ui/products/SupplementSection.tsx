import type {ProductNode} from '~/routes/_index';
import {SupplementSelection} from '../../products/SupplementSelection';
import {SupplementInfo} from './SupplementInfo';
import type {SupplData} from '~/assets/supplements/clean-supplements';

export function SupplementSection({
  suppInfo,
  productList,
  handle,
}: {
  suppInfo: SupplData[];
  productList: ProductNode[];
  handle: string;
}) {
  return (
    <div className="flex flex-col md:items-center">
      <SupplementSelection productList={productList} handle={handle} />
      <SupplementInfo suppInfo={suppInfo} />
    </div>
  );
}
