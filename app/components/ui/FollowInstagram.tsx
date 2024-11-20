import type {InstaImagesType} from '~/assets/insta/insta-content';

export function FollowInstagram({
  imgSup,
  imgInf,
}: {
  imgSup: InstaImagesType[];
  imgInf: InstaImagesType[];
}) {
  return (
    <div className="flex m-10 md:justify-center">
      <div className="flex flex-col gap-[10px]">
        <div className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr] gap-[10px]">
          <div className="col-start-1 col-end-3 flex bg-[#F6F6F5] rounded-lg items-center justify-center">
            <div className="flex flex-col gap-4">
              <div className="flex gap-4 items-center justify-start">
                <img
                  className="w-[60px] h-[60px]"
                  src="/app/assets/insta/insta-logo.png"
                />
                <div className="font-bold text-[20px] leading-6">
                  @uncmfrt.com
                </div>
              </div>
              <button className="w-60 h-[55px] rounded-lg border py-[13px] bg-white font-medium">
                Follow Us on Instagram
              </button>
            </div>
          </div>
          {imgSup.map((item: InstaImagesType) => {
            return (
              <div
                key={item.id}
                className="flex w-[245px] h-[245px] rounded-lg overflow-hidden items-center"
              >
                <img className="object-cover w-full" src={item.imgUrl} />
              </div>
            );
          })}
        </div>
        <div className="grid grid-cols-6 gap-[10px]">
          {imgInf.map((item: InstaImagesType) => {
            return (
              <div
                key={item.id}
                className="flex w-[245px] h-[245px] rounded-lg overflow-hidden items-center"
              >
                <img className="object-cover h-full w-full" src={item.imgUrl} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
