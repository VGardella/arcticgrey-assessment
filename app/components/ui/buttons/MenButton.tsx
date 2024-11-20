export function MenButton({onClick}: {onClick?: () => void}) {
  return (
    <button
      className="flex items-center text-sm font-medium bg-[#E4E4E4] w-[94px] h-[45px] py-2.5 px-3 rounded-md"
      type="submit"
      onClick={onClick}
    >
      <span>Men</span>
      <img
        className="w-5 h-5 ml-2"
        alt="Men"
        src="/../assets/header/button-man.png"
      />
    </button>
  );
}
