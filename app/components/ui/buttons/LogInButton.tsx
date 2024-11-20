export function LogInButton({onClick}: {onClick?: () => void}) {
  return (
    <button name="login" type="submit" onClick={onClick}>
      <img alt="LogIn" src="/app/assets/header/button-user.png" />
    </button>
  );
}