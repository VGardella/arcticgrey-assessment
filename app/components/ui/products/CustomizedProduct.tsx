export function CustomizedProduct() {
  return (
    <div className="flex flex-col items-center bg-[#F6F6F5] w-full h-[834px]">
      <div className="flex flex-col gap-2 w-min mt-20 mb-10">
        <h3 className="w-[225px] h-[19px] self-center">
          Simple & Effective Ingredients
        </h3>
        <div className="">
          <h2 className="font-medium text-[40px] leading-[47px] w-[537px]">
            Customized Protein Powder
          </h2>
        </div>
      </div>
      <div className="flex w-[1520px] h-[548]">
        <div className="flex items-center justify-between w-full">
          <button className="w-10 h-10 bg-[#F5F5F5] border border-[#1B1F231A] rounded cursor-pointer">
            <img className="h-[10px] m-auto" src="/app/assets/arrow-l.png" />
          </button>
          <div className="flex">
            <div className="flex justify-center items-center w-[590px] h-[548px] rounded-l-lg border border-[#0000001A] bg-[#FFFFFF]">
              <img
                className="w-[356px] h-[356px]"
                src="/app/assets/supplements/whey protein.png"
              />
            </div>
            <div className="w-[770px] h-[548px] rounded-l-lg border border-[#0000001A]">
              <div className="flex w-[770px] h-[182px] bg-[#1B1F23] rounded-tr-lg justify-center">
                <div className="flex flex-col justify-center text-white text-center">
                  <h2 className="font-medium text-2xl leading-[28px]">
                    The Blend
                  </h2>
                  <div className="flex gap-10">
                    <div className="flex gap-6 items-center">
                      <img
                        className="w-[50px]"
                        src="/app/assets/supplements/ingredients-dark.png"
                      ></img>
                      <h3 className="text-lg leading-[21px]">Whey Based</h3>
                    </div>
                    <div className="flex gap-6 items-center">
                      <img
                        className="w-[50px]"
                        src="/app/assets/supplements/ingredients-dark.png"
                      ></img>
                      <h3 className="text-lg leading-[21px]">Build Muscle</h3>
                    </div>
                    <div className="flex gap-6 items-center">
                      <img
                        className="w-[50px]"
                        src="/app/assets/supplements/ingredients-dark.png"
                      ></img>
                      <h3 className="text-lg leading-[21px]">
                        Clean Ingredients
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between items-center p-8 w-full h-[366px] bg-[#FFFFFF]">
                <h3 className="font-medium text-lg leading-[21px] text-center">
                  Active Ingredients
                </h3>
                <div className="flex w-[680px] justify-between">
                  <div className="flex flex-col gap-3 my-6">
                    <img
                      className="w-[45px] h-[45px]"
                      src="/app/assets/supplements/ingredients-light.png"
                    ></img>
                    <h3 className="leading-[18px] font-medium">
                      Whey Protein Isolate
                    </h3>
                    <p className="w-[200px] h-min text-sm leading-5">
                      Low Calorie With Virtually No Fat or Lactose, Quickly
                      Absorbed To Maximize Muscle Building & Repair.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 my-6">
                    <img
                      className="w-[45px] h-[45px]"
                      src="/app/assets/supplements/ingredients-light.png"
                    ></img>
                    <h3 className="leading-[18px] font-medium">
                      Whey Protein Isolate
                    </h3>
                    <p className="w-[200px] h-min text-sm leading-5">
                      Low Calorie With Virtually No Fat or Lactose, Quickly
                      Absorbed To Maximize Muscle Building & Repair.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 my-6">
                    <img
                      className="w-[45px] h-[45px]"
                      src="/app/assets/supplements/ingredients-light.png"
                    ></img>
                    <h3 className="leading-[18px] font-medium">
                      Whey Protein Isolate
                    </h3>
                    <p className="w-[200px] h-min text-sm leading-5">
                      Low Calorie With Virtually No Fat or Lactose, Quickly
                      Absorbed To Maximize Muscle Building & Repair.
                    </p>
                  </div>
                </div>
                <button className="w-[680px] h-[50px] bg-[#1B1F23] rounded-lg p-[10px] text-white font-medium">
                  Customize This Blend
                </button>
              </div>
            </div>
          </div>
          <button className="w-10 h-10 bg-[#F5F5F5] border border-[#1B1F231A] rounded cursor-pointer">
            <img className="h-[10px] m-auto" src="/app/assets/arrow-r.png" />
          </button>
        </div>
      </div>
    </div>
  );
}
