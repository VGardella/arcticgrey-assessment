export function TakeQuizButton({onClick}: {onClick?: () => void}) {
  return (
    <button
      className="w-[140px] h-[45px] bg-black text-white rounded-lg"
      type="submit"
      onClick={onClick}
    >
      Take The Quiz
    </button>
  );
}
