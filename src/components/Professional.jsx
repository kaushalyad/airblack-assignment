import React from "react";

const Professional = () => {
  return (
    <div className="bg-black text-white-A700 mobile:p-3 tablet:p-10 ">
      <div>
        <p className=" mobile:text-2xl tablet:text-6xl font-proxima font-semibold">
          Professional Online Makeup Course
        </p>
      </div>
      <div className="mt-4">
        <div className="flex">
          <div className="flex justify-center items-center bg-gray-800 py-2 mobile:px-3 tablet:px-5 rounded-lg">
            <img src="./logos/notebook.svg" className=" mobile: w-4  tablet:w-5" />
            <p className="ml-2 mobile:text-sm tablet:xl">Certification Programme</p>
          </div>
          <div className="flex justify-between items-center mobile:ml-2  tablet:ml-10">
            <img src="./logos/yellowStar.svg" className="w-4" />
            <p className="text-yellow-400 ml-2  mobile:text-md tablet:text-xl">Rated 4.8/5</p>
          </div>    
        </div>
        <div></div>
      </div>
      <div className="mt-4 flex flex-col gap-1">
        <div className="flex">
          <img src="./logos/rightTick.svg" className="w-6" />
          <p className="ml-2 mobile:text-sm tablet:text-xl">India's No.1 Online Makeup Course</p>
        </div>
        <div className="flex">
          <img src="./logos/rightTick.svg" className="w-6" />
          <p className="ml-2 mobile:text-sm tablet:text-xl">Learn by LIVE Do-it-Together Classes</p>
        </div>
        <div className="flex">
          <img src="./logos/rightTick.svg" className="w-6" />
          <p className="ml-2 mobile:text-sm tablet:text-xl">Unlimited Practise Session to master skills</p>
        </div>
      </div>
    </div>
  );
};

export default Professional;
