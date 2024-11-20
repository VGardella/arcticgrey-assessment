import {useAside} from '../aside/hooks/useAside';

export function SearchToggle() {
  const {open} = useAside();
  return (
    <button className="reset" onClick={() => open('search')}>
      <img alt="Search" src="/app/assets/header/button-lens.png" />
    </button>
  );
}
