import React from "react";

const Certificate = () => {
  return (
    <div className="bg-black flex justify-center flex-col items-center pt-10">
      <div>
        <div className="flex  justify-between items-center gap-2">
          <div>
            <img src="./logos/leftVector.svg" className=" w-32" />
          </div>
          <div>
            <p className="font-proxima text-white-A700 mobile:text-2xl tablet:text-5xl  leading-30px text-center">
              Get Certified From India's Biggest Beauty Platform
            </p>
          </div>
          <div>
            <img src="./logos/rightVector.svg " className=" w-32" />
          </div>
        </div>
      </div>
      <div className=" mt-10 pb-5">
        <img src="./images/certificate.png" className=" w-[900px]" />
      </div>
    </div>
  );
};

export default Certificate;
