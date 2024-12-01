// import type {ProductNode} from '~/routes/_index';
import {AlternativeCard} from '../ui/products/AlternativeProductCard';
import {SupplementCard} from '../ui/products/ProductCard';
import type { ExtendedProductFragment } from '../ui/products/ExtendedProduct.type';

export function SupplementSelection({
  productList
}: {
  productList: ExtendedProductFragment[];
}) {

  return (
    <div className="flex bg-[#F6F6F5] w-full md:justify-center">
      <div className="flex flex-col mx-10 my-20 md:w-[1520px] items-center gap-[50px]">
        <div className="flex flex-col items-center w-min gap-6">
          <div className="flex items-center gap-[50px]">
            <button className="w-10 h-10 bg-[#F5F5F5] border border-[#1B1F231A] rounded cursor-pointer">
              <img className="h-[10px] m-auto" src="/../assets/arrow-l.png" />
            </button>
            <div className="flex flex-col gap-2 items-center">
              <p>🌟 Trending</p>
              <div>
                <h3 className="text-[40px] leading-[48px] font-medium">
                  Supplements
                </h3>
              </div>
            </div>
            <button className="w-10 h-10 bg-[#F5F5F5] border border-[#1B1F231A] rounded cursor-pointer">
              <img className="h-[10px] m-auto" src="/../assets/arrow-r.png" />
            </button>
          </div>
          <p>View All</p>
        </div>
        <div className="flex gap-5">
          <AlternativeCard product={productList[0]} />
          {productList.slice(1, 4).map((product) => (
            <SupplementCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
