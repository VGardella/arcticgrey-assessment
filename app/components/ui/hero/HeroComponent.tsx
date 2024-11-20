export function HeroComponent() {
  return (
    <div className="flex bg-[url('/../assets/hero/homepage-man.png')] bg-cover bg-top h-[920px]">
      <div className="flex flex-col self-end h-[263px] ml-10 mb-10 pb-w-auto min-w-[200px] gap-10">
        <div className="w-[840px] h-[263px] gap-2">
          <h1 className="text-6xl text-white font-semibold leading-[83px]">
            Great things never came from comfort zones.
          </h1>
        </div>
        <div className="">
          <button className="w-40 h-[50px] bg-white rounded-lg text-base">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}
