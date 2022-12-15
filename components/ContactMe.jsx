import React from "react";
import Image from "next/image";
import ContactImg from "../public/assets/contactWeb.jpeg";

const ContactMe = () => {
  return (
    <React.Fragment>
      <section className="w-full h-screen">
        <div className="bg-[#001845] w-full py-4 mb-8">
          <h2 className="text-slate-100 text-lg font-semibold md:text-2xl lg:text-2xl px-4">
            Contact Me
          </h2>
        </div>
        {/* Contact Container */}
        <div className="flex justify-center mx-4">
          <div className="flex flex-col justify-evenly min-w-[320px] lg:flex-row lg:max-w-[70%] bg-[#e5e7eb] border border-slate-400 rounded-md shadow-slate-800 shadow-xl px-6 py-6 md:py-8 md:px-8 lg:py-10 lg:px-10 gap-4 lg:gap-8">
            {/* Inner Container 1 */}
            <div className="flex flex-col justify-evenly lg:justify-center gap-4 ">
              <div>
                <Image
                  src={ContactImg}
                  alt="Web Developer Coding"
                  className="rounded-md hover:scale-105 ease-in duration-300"
                />
              </div>
              <div className="flex flex-col gap-4">
                <div>
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">
                    Eliezer Ruiz
                  </h2>
                </div>
                <div>
                  <p className="text-base md:text-lg lg:text-xl font-semibold">
                    Web Developer
                  </p>
                </div>
                <div>
                  <p className="text-sm md:text-base lg:text-lg">
                    Please free to reach me for any questions, freelance and
                    full-time positions.
                  </p>
                </div>
              </div>
            </div>
            {/* Inner Container 2 */}
            <div className="flex flex-col gap-4 lg:w-[50%]">
              <form>
                <div className="flex flex-col gap-2">
                  <label className="text-sm">Name</label>
                  <input
                    type="text"
                    className="border border-gray-500 rounded-md py-2 indent-2"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm">Email</label>
                  <input
                    type="email"
                    className="border border-gray-500 rounded-md py-2 indent-2"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm">Phone Number</label>
                  <input
                    type="number"
                    className="border border-gray-500 rounded-md py-2 indent-2"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm">Subject</label>
                  <input
                    type="text"
                    className="border border-gray-500 rounded-md py-2 indent-2"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm">Message</label>
                  <textarea
                    className="resize-none border border-gray-500 rounded-md py-2 indent-2"
                    cols="30"
                    rows="4"
                  ></textarea>
                </div>
                <div className="flex grow mt-2">
                  <button className="bg-indigo-600 py-3 rounded-md text-slate-100 w-full">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* <div className="flex flex-col max-w-6xl items-center sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="flex flex-col p-6 mr-2 bg-blue-500 rounded-lg">
                <h1 className="text-4xl sm:text-5xl text-slate-100 font-extrabold tracking-tight">
                  Get in touch
                </h1>
                <p className="text-normal text-lg sm:text-2xl font-medium text-slate-100 mt-2">
                  Fill in the form to start a conversation
                </p>

                <div className="flex items-center mt-8 text-slate-100">
                  <div className="ml-4 text-md tracking-wide font-semibold w-40">
                    Acme Inc, Street, State, Postal Code
                  </div>
                </div>

                <div className="flex items-center mt-4 text-slate-100">
                  <div className="ml-4 text-md tracking-wide font-semibold w-40">
                    +44 1234567890
                  </div>
                </div>

                <div className="flex items-center mt-2 text-slate-100">
                  <div className="ml-4 text-md tracking-wide font-semibold w-40">
                    info@acme.org
                  </div>
                </div>
              </div>

              <form className="flex flex-col justify-center py-6 px-4 gap-4">
                <div className="flex flex-col">
                  <label htmlFor="name" className="hidden">
                    Full Name
                  </label>
                  <input
                    type="name"
                    name="name"
                    id="name"
                    placeholder="Full Name"
                    className="w-100 py-3 px-3 rounded-lg bg-white border border-gray-400 font-semibold focus:border-indigo-500 focus:outline-none"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="email" className="hidden">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    className="w-100  py-3 px-3 rounded-lg bg-white  border border-gray-400 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="tel" className="hidden">
                    Number
                  </label>
                  <input
                    type="tel"
                    name="tel"
                    id="tel"
                    placeholder="Telephone Number"
                    className="w-100 py-3 px-3 rounded-lg bg-white  border border-gray-400 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="md:w-32 bg-indigo-700 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-2 hover:bg-indigo-500 transition ease-in-out duration-300"
                >
                  Submit
                </button>
              </form>
            </div>
          </div> */}
      </section>
    </React.Fragment>
  );
};

export default ContactMe;
