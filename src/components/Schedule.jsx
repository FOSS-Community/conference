import React from "react";
import fitt from "../assets/fitt.png";

const Schedule = () => {
  return (
    <div>
      <section id="schedule" className="mt-24 pt-4 bg-[#DFE4EF] antialiased">
        <div className="max-w-screen-xl bg-[#DFE4EF] px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl bg-[#DFE4EF] font-Montserrat font-extrabold leading-tight tracking-tight text-[#212A5C]">
              Schedule
            </h2>
          </div>
          <div className="w-[90%] h-auto mx-auto mt-4 mb-auto p-2 rounded-md bg-slate-50 hover:shadow-md hover:shadow-[#212A5C] transition ease-in duration-100 delay-100">
            <div className="py-2 px-auto font-Montserrat font-bold">
              <h3 className="text-slate-500 hover:text-slate-700 transition ease-in duration-100 delay-100">
                PyDelhi Conf &middot; Day - 1
              </h3>
            </div>
            <div className="flex flex-row justify-between rounded-md bg-[#dfe4ef] p-4">
              <div className="bg-[#dfe4ef] rounded-md font-Roboto w-[90%]">
                <p className="mb-2 bg-[#dfe4ef] text-slate-700 font-medium">
                  Venue:{" "}
                  <span className="font-semibold text-[#2d7732] underline">
                    HALL&nbsp;1,&nbsp;IITD
                  </span>
                </p>
                <p className="mb-2 bg-[#dfe4ef] text-slate-700 font-medium">
                  Date:{" "}
                  <span className="font-semibold text-[#2d7732] underline">
                    05/08/2023
                  </span>
                </p>
                <p className="mb-2 bg-[#dfe4ef] text-slate-700 font-medium">
                  Timings:{" "}
                  <span className="font-semibold text-[#2d7732] underline">
                    (Entry begins: 10:00 AM IST - Entry closes: 5:00 PM IST
                    +05:30)
                  </span>
                </p>
              </div>
              <div className="bg-[#dfe4ef] w-20 h-20 lg:w-20 lg:h-20 md:w-14 md:h-14 sm:w-10 sm:h-10 sm:block">
                <img src={fitt} className=" bg-[#dfe4ef]" alt="Venue Logo" />
              </div>
            </div>
          </div>
          <div className="w-[90%] h-auto mx-auto mt-4 mb-auto p-2 rounded-md bg-slate-50 hover:shadow-md hover:shadow-[#212A5C] transition ease-in duration-100 delay-100">
            <div className="py-2 px-auto font-Montserrat font-bold">
              <h3 className="text-slate-500 hover:text-slate-700 transition ease-in duration-100 delay-100">
                PyDelhi Conf &middot; Day - 2
              </h3>
            </div>
            <div className="flex flex-row justify-between rounded-md bg-[#dfe4ef] p-4">
              <div className="bg-[#dfe4ef] rounded-md font-Roboto w-[90%]">
                <p className="mb-2 bg-[#dfe4ef] text-slate-700 font-medium">
                  Venue:{" "}
                  <span className="font-semibold text-[#2d7732] underline">
                    HALL&nbsp;2,&nbsp;IITD
                  </span>
                </p>
                <p className="mb-2 bg-[#dfe4ef] text-slate-700 font-medium">
                  Date:{" "}
                  <span className="font-semibold text-[#2d7732] underline">
                    06/08/2023
                  </span>
                </p>
                <p className="mb-2 bg-[#dfe4ef] text-slate-700 font-medium">
                  Timings:{" "}
                  <span className="font-semibold text-[#2d7732] underline">
                    (Entry begins: 10:00 AM IST - Entry closes: 5:00 PM IST
                    +05:30)
                  </span>
                </p>
              </div>
              <div className="bg-[#dfe4ef] w-20 h-20 lg:w-20 lg:h-20 md:w-14 md:h-14 sm:w-10 sm:h-10 sm:block">
                <img src={fitt} className=" bg-[#dfe4ef]" alt="Venue Logo" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Schedule;
