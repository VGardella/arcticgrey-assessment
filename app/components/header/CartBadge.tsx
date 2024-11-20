import type {CartViewPayload} from '@shopify/hydrogen';
import {useAnalytics} from '@shopify/hydrogen';
import {useAside} from '../aside/hooks/useAside';

export function CartBadge({count}: {count: number | null}) {
  const {open} = useAside();
  const {publish, shop, cart, prevCart} = useAnalytics();

  return (
    <a
      href="/cart"
      onClick={(e) => {
        e.preventDefault();
        open('cart');
        publish('cart_viewed', {
          cart,
          prevCart,
          shop,
          url: window.location.href || '',
        } as CartViewPayload);
      }}
    >
      <img src="/../assets/header/button-cart.png"></img>
    </a>
  );
}
