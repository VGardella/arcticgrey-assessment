export function Footer() {
  return (
    <div className="bg-[#F6F6F5]">
      <div className="flex justify-between px-10 py-20">
        <div className="flex flex-col w-min gap-8">
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-2xl leading-[26px] text-[#1B1F23CC]">
              Be a Part of Our Journey
            </h3>
            <p>
              Welcome to UNCMFRT. Sign up for exclusive content and we'll send
              you 10% off.
            </p>
          </div>
          <div className="flex">
            <form className="flex" id="emailForm">
              <input
                placeholder="Email Adress"
                className="flex h-[50px] m-0 items-center justify-center rounded-l-lg border border-[#DDDDDD] bg-white px-5 py-[13px]"
                type="text"
                name="newEmail"
              />
              <button
                className="w-[136px] h-[50px] rounded-r-lg bg-[#1B1F23] border border-[#1B1F23] px-5 py-[13px] text-white"
                type="submit"
                form="emailForm"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="flex gap-[60px]">
          <div className="flex flex-col gap-6">
            <h3 className="font-medium text-lg text-[#1B1F23] leading-[21px]">
              About Us
            </h3>
            <ul className="flex flex-col">
              <li>Blog</li>
              <li>Product Reviews</li>
              <li>Our Story</li>
              <li>Delivery</li>
            </ul>
          </div>
          <div className="flex flex-col gap-6">
            <h3 className="font-medium text-lg text-[#1B1F23] leading-[21px]">
              Support
            </h3>
            <ul>
              <li>Order Status</li>
              <li>Help Center</li>
              <li>Contact Us</li>
              <li>Returns</li>
            </ul>
          </div>
          <div className="flex flex-col gap-6">
            <h3 className="font-medium text-lg text-[#1B1F23] leading-[21px]">
              Important Link
            </h3>
            <ul>
              <li>Maintenance</li>
              <li>Warranty</li>
              <li>Canadian Customers</li>
              <li>Setup</li>
            </ul>
          </div>
          <div className="flex flex-col gap-6">
            <h3 className="font-medium text-lg text-[#1B1F23] leading-[21px]]">
              Legal
            </h3>
            <ul>
              <li>Privacy Policy</li>
              <li>Accessibility</li>
              <li>Terms of Service</li>
              <li>Affiliate Program</li>
              <li>Articles</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-[34px]">
          <div className="flex flex-col gap-6">
            <h3 className="font-medium text-lg text-[#1B1F23] leading-[21px]">
              Contact Us
            </h3>
            <div className="flex flex-col gap-2">
              <p>Let Us Help You</p>
              <p className="font-bold text-2xl leading-[28px]">
                (888) 860-0572
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h3 className="font-medium text-lg text-[#1B1F23] leading-[21px]">
              Connect With Us
            </h3>
            <div className="flex gap-[20px]">
              <img
                className="h-[20px]"
                src="/app/assets/icons/insta-icon.png"
              />
              <img
                className="h-[15px]"
                src="/app/assets/icons/twitter-icon.png"
              ></img>
              <img
                className="h-[18px]"
                src="/app/assets/icons/facebook-icon.png"
              ></img>
              <img
                className="h-[16px]"
                src="/app/assets/icons/yt-icon.png"
              ></img>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center h-[50px] border-b border-t text-opacity-50 border-[#0000001A]">
        <p className="text-[#1B1F2305A] text-[#1B1F235A] pl-10">
          © uncmfrt.com. All right reserved.
        </p>
      </div>
    </div>
  );
}
