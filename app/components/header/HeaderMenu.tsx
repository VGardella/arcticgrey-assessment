import {NavLink} from '@remix-run/react';
import {useAside} from '../aside/hooks/useAside';
import FALLBACK_HEADER_MENU from './menu-content';
import {activeLinkStyle} from './LinkStyle';
import type {Viewport} from './Header.type';
import {SearchToggle} from './SearchToggle';

export function HeaderMenu({viewport, menu}: {viewport: Viewport; menu: null}) {
  const className = `header-menu-${viewport}`;
  const {close} = useAside();

  return (
    <nav className={className} role="navigation">
      <SearchToggle />
      {(menu || FALLBACK_HEADER_MENU).items.map((item) => {
        const url = item.url;
        return (
          <NavLink
            className="header-menu-item"
            end
            key={item.id}
            onClick={close}
            prefetch="intent"
            style={activeLinkStyle}
            to={url}
          >
            {item.title}
          </NavLink>
        );
      })}
    </nav>
  );
}
