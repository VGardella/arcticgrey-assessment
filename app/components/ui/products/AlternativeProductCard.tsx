import {ProductImage} from './ProductImage';
import {AddToCartButton} from '../../cart/AddToCartButton';
import { ProductFragment } from 'storefrontapi.generated';
import { useAside } from '~/components/aside/hooks/useAside';

export function AlternativeCard({product}: {product: ProductFragment}) {
  const {open} = useAside();

  return (
    <div className="flex flex-col rounded-lg bg-white w-[365px] h-[505px] items-center">
      <div className="flex justify-center items-center">
        <div className="w-[365px] h-[365px] p-10">
          <ProductImage image={product.variants.nodes[0].image} />
        </div>
      </div>
      <div className="flex flex-col gap-[10px] justify-center -mt-4">
        <div className="">
          <form className="flex gap-[10px]" name="purchase-type">
            <div className="flex bg-[#F6F6F5] rounded-md border border-[#EEEEEE] w-full gap-2 p-2 peer-checked:border-4 peer-checked:border-black">
              <div>
                <input
                  className="accent-black peer"
                  type="radio"
                  name="purchase-type"
                  id="one-time"
                />
              </div>
              <label
                className="text-xs leading-[17px] text-[#1B1F23]"
                htmlFor="one-time"
              >
                One-Time Purchase <br />${' '}
                {product.variants.nodes[0].price.amount}
              </label>
            </div>
            <div className="flex bg-[#F6F6F5] rounded-md border border-[#EEEEEE] w-full gap-2 p-2">
              <div>
                <input
                  className="accent-black"
                  type="radio"
                  name="purchase-type"
                  id="subscribe"
                />
              </div>
              <label
                className="text-xs leading-[17px] text-[#1B1F23]"
                htmlFor="subscribe"
              >
                Subscribe & Save <br />${' '}
                {product.variants.nodes[0].price.amount}
              </label>
            </div>
          </form>
        </div>
        <div className="h-[45px] w-[325px] py-[14px] rounded-lg bg-[#1B1F23] text-white font-medium text-[14px] text-center leading-[17px] cursor-pointer">
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
            {product?.variants.nodes[0].availableForSale
              ? `Add to Cart - $${product.variants.nodes[0].price.amount}`
              : 'Sold out'}
          </AddToCartButton>
        </div>
        <p className="text-[12px] text-[#1B1F23] leading-[15px] text-center">
          View Full Details
        </p>
      </div>
    </div>
  );
}
