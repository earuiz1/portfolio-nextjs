import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import ContactImg from "../public/assets/contactWeb.jpeg";
import { useFormik } from "formik";
import * as Yup from "yup";
import { sendContactForm } from "../lib/api";

const ContactMe = () => {
  /**
   * The function is called when the form is submitted. It takes the values from the form and sends them
   * to the sendContactForm function. Then it resets the form.
   */

  const [error, setError] = useState(null);

  const onSubmit = async (values, { resetForm }) => {
    try {
      await sendContactForm(values);

      //Show toast
      toast.success("Message sent!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      setError(null);

      //Reseting the form inputs fields after submission
      resetForm({ values: "" });
    } catch (error) {
      setError(error.message);
    }
  };

  /* Setting the initial values of the form using formik. */
  const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  /* Validating the form inputs using yup. */
  const validationSchema = Yup.object({
    name: Yup.string()
      .max(20, "Name must be 20 characters long!")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email address!")
      .required("Email is required"),
    subject: Yup.string()
      .max(30, "Subject must be 20 characters long!")
      .required("Subject is required"),
    message: Yup.string()
      .max(200, "Message must be 200 characters long!")
      .required("Message is required"),
  });

  /* Setting the initial values of the form using formik. */
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <React.Fragment>
      <section id="contact">
        <div className="bg-[#001845] w-full py-4">
          <h2 className="text-slate-100 text-2xl font-semibold md:text-3xl lg:text-4xl px-4">
            Contact Me
          </h2>
        </div>
        {/* Contact Container */}
        <div className="flex justify-center mx-4 my-20">
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
                  <p className="text-sm md:text-base md:leading-tight lg:text-lg lg:leading-tight ">
                    Please free to reach me for any questions, freelance and
                    full-time positions.
                  </p>
                </div>
              </div>
            </div>
            {/* Inner Container 2 */}
            <div className="flex flex-col lg:justify-center lg:w-[50%]">
              <form onSubmit={formik.handleSubmit}>
                {error && (
                  <span className="font-bold text-red-600 uppercase">
                    {error}
                  </span>
                )}
                <div className="flex flex-col gap-2 mb-2">
                  <label className="text-sm" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className={`border rounded-md py-2 indent-2 ${
                      formik.errors.name ? "border-red-500" : "border-gray-500"
                    }`}
                    value={formik.values.name}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.name ? (
                    <p className="text-sm text-red-500">{formik.errors.name}</p>
                  ) : (
                    ""
                  )}
                </div>
                <div className="flex flex-col gap-2 mb-2">
                  <label className="text-sm" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className={`border rounded-md py-2 indent-2 ${
                      formik.errors.email ? "border-red-500" : "border-gray-500"
                    }`}
                    value={formik.values.email}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.email ? (
                    <p className="text-sm text-red-500">
                      {formik.errors.email}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
                <div className="flex flex-col gap-2 mb-2">
                  <label className="text-sm" htmlFor="subject">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    className={`border rounded-md py-2 indent-2 ${
                      formik.errors.subject
                        ? "border-red-500"
                        : "border-gray-500"
                    }`}
                    value={formik.values.subject}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.subject ? (
                    <p className="text-sm text-red-500">
                      {formik.errors.subject}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
                <div className="flex flex-col gap-2 mb-2">
                  <label className="text-sm" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    name="message"
                    onChange={formik.handleChange}
                    value={formik.values.message}
                    className={`resize-none border rounded-md py-2 indent-2 ${
                      formik.errors.message
                        ? "border-red-500"
                        : "border-gray-500"
                    }`}
                    cols="30"
                    rows="4"
                  ></textarea>
                  {formik.errors.message ? (
                    <p className="text-sm text-red-500">
                      {formik.errors.message}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
                <div className="flex grow mt-4">
                  <button
                    type="submit"
                    className="bg-indigo-600 font-semibold py-3 rounded-md text-slate-100 w-full hover:bg-indigo-500"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default ContactMe;
