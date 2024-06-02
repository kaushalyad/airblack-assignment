import React from "react";

const Footer = () => {
  return (
    <div className=" bg-cover bg-[url('./assets/images/footer-background.png')] w-screen text-center  h-screen flex flex-col gap-6 justify-center items-center pt-24">
      <div>
        <p className="text-white-A700 font-proxima mobile:text-3xl tablet:text-5xl  font-semibold leading-30px text-center max-w-100 mobile: mx-5">
          Join our growing community of 35,000+ alumni
        </p>
      </div>
      <div className=" mobile:w-[90%] tablet:w-[50%] mt-4">
        <button className="bg-gradient-to-r from-[#F56563] to-[#E54988] text-white-A700 w-[100%] py-2 rounded-md font-proxima mobile:text-lg tablet:text-2xl font-bold">
          Apply Now
        </button>
      </div>
      <div className="flex flex-row gap-5 mt-5">
        <div className=" cursor-pointer">
          <img
            src="./logos/instagram.svg"
            className=" mobile:w-12 tablet:w-16"
          />
        </div>
        <div className=" cursor-pointer">
          <img
            src="./logos/facebook.svg"
            className=" mobile:w-12 tablet:w-16"
          />
        </div>
        <div className=" cursor-pointer">
          <img
            src="./logos/linkedin.svg"
            className=" mobile:w-12 tablet:w-16"
          />
        </div>
        <div className=" cursor-pointer">
          <img src="./logos/twitter.svg" className=" mobile:w-12 tablet:w-16" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
