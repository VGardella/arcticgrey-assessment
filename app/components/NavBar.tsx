export function NavBar({
  onClick,
}: {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  return (
    <div className="flex gap-10 leading-[15px] text-[#1B1F23]">
      <button value="Sleep Quality" onClick={onClick}>
        Sleep
      </button>
      <button value="Cognitive Funcion" onClick={onClick}>
        Cognitive Funcion
      </button>
      <button value="Foundational Health" onClick={onClick}>
        Foundational Health
      </button>
      <button value="Athletic Performance" onClick={onClick}>
        Athletic Performance
      </button>
      <button value="Hormone Support" onClick={onClick}>
        Hormone Support
      </button>
    </div>
  );
}
