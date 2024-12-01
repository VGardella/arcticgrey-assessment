import {ProductImage} from './ProductImage';
import {AddToCartButton} from '../../cart/AddToCartButton';
import { useAside } from '~/components/aside/hooks/useAside';
import type { ExtendedProductFragment } from './ExtendedProduct.type';


export function SupplementCard({product}: {product: ExtendedProductFragment }) {
  const {open} = useAside();
  // const metafieldsArray = JSON.parse(product.metafields[0].value)
  const metafieldsArray = [null];

  return (
    <div className="flex flex-col rounded-lg bg-white w-[365px] h-[505px]">
      <div className="flex justify-center items-center">
        <div className="w-[365px] h-[365px] p-10">
          <ProductImage image={product.variants.nodes[0].image} />
        </div>
      </div>
      <div className="flex flex-col gap-4 mx-5 mb-5 mt-auto w-[325px] h-[110px]">
        <div className="grid grid-cols-[1fr_1fr_1fr_1fr] gap-2 w-full">
          {(metafieldsArray &&
          metafieldsArray.some((field) => field !== null)
            ? metafieldsArray
            : FALLBACK_METAFIELDS
          ).map((field) => {
            return (
              <div
                className="px-[10px] py-[5px] bg-[#F6F6F5] rounded text-[10px] leading-3 whitespace-nowrap w-min"
                key={field?.id}
              >
                &#11044; {field?.value}
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
                disabled={!product.variants.nodes[0].availableForSale}
                onClick={() => {
                  open('cart');
                }}
                lines={
                  product.variants.nodes[0]
                    ? [
                        {
                          merchandiseId: product.variants.nodes[0].id,
                          quantity: 1,
                        },
                      ]
                    : []
                }
              >
                {product.variants.nodes[0].availableForSale
                  ? `Add  ●  +$${product.variants.nodes[0].price.amount}`
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
