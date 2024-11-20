import {Suspense} from 'react';
import type {HeaderProps} from './Header.type';
import {Await} from '@remix-run/react';
import {CartBanner} from './CartBanner';
import {CartBadge} from './CartBadge';

export function CartToggle({cart}: Pick<HeaderProps, 'cart'>) {
  return (
    <Suspense fallback={<CartBadge count={null} />}>
      <Await resolve={cart}>
        <CartBanner />
      </Await>
    </Suspense>
  );
}
