import {SupplementSelection} from '../../products/SupplementSelection';
import {SupplementInfo} from './SupplementInfo';
import type {SupplData} from 'public/assets/supplements/clean-supplements';
import type {ExtendedProductFragment} from './ExtendedProduct.type';

export function SupplementSection({
  suppInfo,
  productList,
}: {
  suppInfo: SupplData[];
  productList: ExtendedProductFragment[];
}) {
  return (
    <div className="flex flex-col md:items-center">
      <SupplementSelection productList={productList} />
      <SupplementInfo suppInfo={suppInfo} />
    </div>
  );
}
