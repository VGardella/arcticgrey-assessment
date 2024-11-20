import type {ProductNode} from '~/routes/_index';
import {ProductImage} from './ProductImage';
import {AddToCartButton} from '../../cart/AddToCartButton';

export function SupplementCard({product}: {product: ProductNode}) {
  return (
    <div className="flex flex-col rounded-lg bg-white w-[365px] h-[505px]">
      <div className="flex justify-center items-center">
        <div className="w-[365px] h-[365px] p-10">
          <ProductImage image={product.images.edges[0].node} />
        </div>
      </div>
      <div className="flex flex-col gap-4 mx-5 mb-5 mt-auto w-[325px] h-[110px]">
        <div className="grid grid-cols-[1fr_1fr_1fr_1fr] gap-2 w-full">
          {(product.metafields &&
          product.metafields.some((field) => field !== null)
            ? product.metafields
            : FALLBACK_METAFIELDS
          ).map((field) => {
            return (
              <div
                className="px-[10px] py-[5px] bg-[#F6F6F5] rounded text-[10px] leading-3 whitespace-nowrap w-min"
                key={field.id}
              >
                &#11044; {field.value}
              </div>
            );
          })}
        </div>
        <div className="flex flex-col w-[325px] gap-2 justify-between">
          <div className="flex flex-col gap-[5px]">
            <h3 className="font-medium leading-[19px]">{product.title}</h3>
            <p className="text-[13px] leading-[15px]">{product.description}</p>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex">
              {Array.from({length: 5}).map((_, index) => (
                <div key={index}>
                  <img className="w-3 h-3" src="/../assets/black-star.png" />
                </div>
              ))}
            </div>
            <div className="px-[15px] py-[5px] bg-[#1B1F23] text-white text-[13px] leading-[15px] rounded cursor-pointer">
              <AddToCartButton
                disabled={!product.availableForSale}
                onClick={() => {
                  open('cart');
                }}
                lines={
                  product
                    ? [
                        {
                          merchandiseId: product.id,
                          quantity: 1,
                        },
                      ]
                    : []
                }
              >
                {product?.availableForSale
                  ? `Add  ●  +$${product.priceRange.maxVariantPrice.amount}`
                  : 'Sold out'}
              </AddToCartButton>
            </div>
          </div>
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
