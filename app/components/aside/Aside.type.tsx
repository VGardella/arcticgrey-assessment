export type AsideType = 'search' | 'cart' | 'mobile' | 'closed';

export type AsideContextValue = {
  type: AsideType;
  open: (mode: AsideType) => void;
  close: () => void;
};
