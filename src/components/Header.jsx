import React from "react";

const Header = () => {
  return (
    <div className="bg-[url('./assets/images/footer-background.png')] w-screen  bg-cover mobile:min-h-[120px] flex justify-center mobile:max-h-[120px] tablet:min-h-[450px]">
      <div className="mt-2 flex flex-col justify-center items-center">
        <div>
          <img
            src="./logos/Airblack Beauty Club Logo.svg"
            className="  mobile: w-32 tablet:w-64"
          />
        </div>
        <div>
          <p className="text-center text-white-A700 mt-1  font-semibold mobile:text-xl tablet:text-6xl">
            PRESENTS
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
