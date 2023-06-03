import React from "react";

const Register = () => {
  return (
    <div>
      <section id="register" className="mt-40 bg-[#DFE4EF] antialiased">
        <div className="max-w-screen-xl bg-[#DFE4EF] px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-Montserrat bg-[#DFE4EF] font-extrabold leading-tight tracking-tight text-[#212A5C]">
              Register Now
            </h2>
            <span className="font-Roboto">
              We will update the ticket link here as soon as we have finalized
              the event details.
            </span>
          </div>
          <div className="max-w-md mx-auto text-center">
            <button
              type="button"
              className="mt-4 mr-2 rounded-2xl border-2 uppercase bg-slate-50  border-gray-400 hover:border-blue-500 hover:bg-stone-100 hover:text-[#212A5C] transition ease-in duration-100 delay-100 text-md font-semibold text-blue-500 py-3 px-4"
            >
              REGISTER
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
