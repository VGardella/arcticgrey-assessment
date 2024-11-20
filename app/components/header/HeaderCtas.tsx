import type {Viewport, HeaderProps} from './Header.type';
import {HeaderMenuMobileToggle} from './MobileMenuToggle';
import {UserIcons} from './UserIcons';

export function HeaderCtas({
  cart,
  viewport,
}: Pick<HeaderProps, 'cart'> & {viewport: Viewport}) {
  return (
    <nav className="header-ctas" role="navigation">
      <HeaderMenuMobileToggle />
      {viewport === 'desktop' && <UserIcons cart={cart} />}
    </nav>
  );
}
