import {LogInButton} from '../ui/buttons/LogInButton';
import {MenButton} from '../ui/buttons/MenButton';
import {TakeQuizButton} from '../ui/buttons/TakeQuizButton';
import {CartToggle} from './CartToggle';
import type {HeaderProps} from './Header.type';

export function UserIcons({cart}: Pick<HeaderProps, 'cart'>) {
  return (
    <nav className="flex items-center gap-1">
      <MenButton />
      <div className="flex items-center gap-[30px]">
        <TakeQuizButton />
        <div className="flex items-center gap-5">
          <LogInButton />
          <CartToggle cart={cart} />
        </div>
      </div>
    </nav>
  );
}
