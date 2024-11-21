import {filterCollection} from '~/domain/filterCollection';
import type {ProductNode} from '~/routes/_index';
import {NavBar} from '../NavBar';
import {ProductImage} from '../ui/products/ProductImage';
import {AddToCartButton} from '../cart/AddToCartButton';
import {TagsProductCard} from '../ui/products/TagsProductCard';

export function BundlesSelection({
  productList,
  handle,
}: {
  productList: ProductNode[];
  handle: string;
}) {
  const bundles = filterCollection({productList, handle}).slice(0, 4);

  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-col mx-10 my-20 gap-[50px] md:w-[1520px]">
        <div className="flex justify-between">
          <div className="">
            <p>📦 Goals Specific</p>
            <h3 className="text-[40px] leading-[48px] font-medium">Bundles</h3>
          </div>
          <nav className="flex intems-center">
            <NavBar />
          </nav>
          <div className="flex gap-6 text-[#1B1F23] text-lg leading-21px items-center">
            <h4 className="underline text-lg">View All Bundles</h4>
            <div className="flex gap-2">
              <button className="w-10 h-10 bg-[#F5F5F5] border border-[#1B1F231A] rounded cursor-pointer">
                <img className="h-[10px] m-auto" src="/../assets/arrow-l.png" />
              </button>
              <button className="w-10 h-10 bg-[#F5F5F5] border border-[#1B1F231A] rounded cursor-pointer">
                <img className="h-[10px] m-auto" src="/../assets/arrow-r.png" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex gap-5">
          {bundles.map((item) => {
            return <TagsProductCard key={item.id} product={item} />;
          })}
        </div>
      </div>
    </div>
  );
}
