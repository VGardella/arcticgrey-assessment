import {NavLink} from '@remix-run/react';
import {activeLinkStyle} from './LinkStyle';
import {HeaderMenu} from './HeaderMenu';
import type {HeaderProps, Viewport} from './Header.type';
import {HeaderCtas} from './HeaderCtas';

export function Header({
  cart,
  viewport,
}: Pick<HeaderProps, 'cart'> & {viewport: Viewport}) {
  const menu = null;
  return (
    <header className="header">
      <NavLink
        className="font-size: 24px;"
        prefetch="intent"
        to="/"
        style={activeLinkStyle}
        end
      >
        <strong>UNCMFRT.COM</strong>
      </NavLink>
      <HeaderMenu viewport={viewport} menu={menu} />
      <HeaderCtas viewport={viewport} cart={cart} />
    </header>
  );
}
