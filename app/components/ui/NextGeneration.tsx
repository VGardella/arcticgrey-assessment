export function NextGenSection() {
  return (
    <div className="flex mx-10 my-20 bg-[url('/../assets/hero/bathtub-man.png')] bg-cover h-[750px] rounded-lg md:w-[1520px] md:mx-auto">
      <div className="flex flex-col ml-20 justify-center gap-10">
        <div className="flex flex-col -gap-2">
          <h1 className="text-[50px] text-white font-semibold leading-[59px]">
            The Next Generation is Here
          </h1>
          <p className="text-white">
            Innovative Engineering. Intelligent Design. Meet The Plunge All-I.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="w-[190px] h-[50px] bg-white p-[10px] rounded-lg font-medium text-[#1B1F23]">
            Take The Plunge
          </button>
          <button className="w-[190px] h-[50px] p-[10px] border border-white rounded-lg font-medium text-white">
            Dive Deeper
          </button>
        </div>
      </div>
    </div>
  );
}
