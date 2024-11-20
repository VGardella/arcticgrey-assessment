import {filterCollection} from '~/domain/filterCollection';
import type {ProductNode} from '~/routes/_index';
import {NavBar} from '../NavBar';
import {ProductImage} from '../ui/products/ProductImage';
import {AddToCartButton} from '../cart/AddToCartButton';

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
                <img
                  className="h-[10px] m-auto"
                  src="/app/assets/arrow-l.png"
                />
              </button>
              <button className="w-10 h-10 bg-[#F5F5F5] border border-[#1B1F231A] rounded cursor-pointer">
                <img
                  className="h-[10px] m-auto"
                  src="/app/assets/arrow-r.png"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="flex gap-5">
          {bundles.map((item) => {
            return (
              <div className="flex flex-col rounded-lg bg-[#F6F6F5] w-[365px] h-[505px]">
                <div className="flex justify-center items-center">
                  <div className="w-[365px] h-[365px] p-10">
                    <ProductImage image={item.images.edges[0].node} />
                  </div>
                </div>
                <div className="flex flex-col gap-4 mx-5 mb-5 mt-auto w-[325px] h-[110px]">
                  <div className="grid grid-cols-[1fr_1fr_1fr_1fr] gap-2 w-full">
                    {(item.metafields &&
                    item.metafields.some((field) => field !== null)
                      ? item.metafields
                      : FALLBACK_METAFIELDS
                    ).map((field) => {
                      return (
                        <div
                          className="px-[10px] py-[5px] bg-white rounded text-[10px] leading-3 whitespace-nowrap w-min"
                          key={field.id}
                        >
                          &#11044; {field.value}
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex flex-col w-[325px] gap-2 justify-between">
                    <div className="flex flex-col gap-[5px]">
                      <h3 className="font-medium leading-[19px]">
                        {item.title}
                      </h3>
                      <p className="text-[13px] leading-[15px]">
                        {item.tags.join(', ')}
                      </p>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex">
                        {Array.from({length: 5}).map((_, index) => (
                          <div key={index}>
                            <img
                              className="w-3 h-3"
                              src="/app/assets/black-star.png"
                            />
                          </div>
                        ))}
                      </div>
                      <div className="px-[15px] py-[5px] bg-[#1B1F23] text-white text-[13px] leading-[15px] rounded cursor-pointer">
                        <AddToCartButton
                          disabled={!item.availableForSale}
                          onClick={() => {
                            open('cart');
                          }}
                          lines={
                            item
                              ? [
                                  {
                                    merchandiseId: item.id,
                                    quantity: 1,
                                  },
                                ]
                              : []
                          }
                        >
                          {item?.availableForSale ? `Add to Cart` : 'Sold out'}
                        </AddToCartButton>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const FALLBACK_METAFIELDS = [
  {
    id: 'dietary1',
    value: 'Gluten Free',
  },
  {
    id: 'dietary2',
    value: 'GMO Free',
  },
];
