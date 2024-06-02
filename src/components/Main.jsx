import React from "react";

const Main = () => {
  return (
    <div className=" bg-cover bg-[url('./assets/images/footer-background.png')] w-screen text-center  h-screen flex flex-col gap-6 justify-center items-center text-white-A700">
      <div>
        <div className=" flex gap-4 justify-between items-center">
          <div>
            <img src="./logos/leftVector.svg" className=" w-24"></img>
          </div>
          <div>
            <p className="tablet:text-7xl mobile:text-3xl font-semibold">
              Why Should You Join Airblack?
            </p>
          </div>
          <div>
            <img src="./logos/rightVector.svg" className=" w-24" />
          </div>
        </div>
      </div>
      <div className="flex flex-row mt-5 gap-6 justify-between items-center ">
        <div className="flex flex-col justify-center items-center gap-4">
          <img src="./logos/video.svg" className=" mobile:w-12 tablet:w-20" />
          <p className=" mobile:text-sm tablet:text-3xl">
            Do-it-together, live on zoom
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          <img src="./logos/star.svg" className=" mobile: w-12 tablet:w-20" />
          <div className=" flex flex-col">
            <p className=" mobile:text-sm tablet:text-3xl">4.8 /5</p>
            <p className=" mobile:text-sm tablet:text-3xl">Rated Classes</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          <img src="./logos/people.svg" className=" mobile:w-12 tablet:w-20" />
          <p className=" mobile:text-sm tablet:text-3xl">35000+ Members</p>
        </div>
      </div>
      <div className="  mobile: w-[90%] tablet:w-[50%] mt-5">
        <button className="bg-gradient-to-r from-[#F56563] to-[#E54988] text-white-A700 w-[100%] py-2 rounded-md font-proxima font-bold mobile:text-lg tablet:text-2xl ">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default Main;
