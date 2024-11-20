import type {CartApiQueryFragment, HeaderQuery} from 'storefrontapi.generated';

export interface HeaderProps {
  header?: HeaderQuery;
  cart: Promise<CartApiQueryFragment | null>;
}

export type Viewport = 'desktop' | 'mobile';
