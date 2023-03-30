import React, { useState } from "react";
import { toast } from "react-toastify";
import Image from "next/image";
import ContactImg from "../../public/assets/contactWeb.jpeg";
import { useFormik } from "formik";
import * as Yup from "yup";
import { sendContactForm } from "../../lib/api";
import Header from "../UI/Header";

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
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
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
    <section id="contact">
      <Header title="Contact Me" />
      {/* Contact Container */}
      <div className="flex justify-center mx-4 xl:py-40 lg:py-30 md:py-20 py-10">
        <div className="flex flex-col justify-evenly min-w-[320px] lg:flex-row lg:max-w-[70%] bg-[#252A33] rounded-md shadow-slate-500 shadow-lg px-6 py-6 md:py-8 md:px-8 lg:py-10 lg:px-10 gap-4 lg:gap-8">
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
                <span className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-100">
                  Eliezer Ruiz
                </span>
              </div>
              <div>
                <p className="text-base md:text-lg lg:text-xl font-semibold text-slate-100">
                  Web Developer
                </p>
              </div>
              <div>
                <p className="text-sm md:text-base md:leading-tight lg:text-lg lg:leading-tight text-slate-100">
                  Please free to reach me for any questions, freelance or
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
                <label
                  className="text-sm font-semibold text-slate-100"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="rounded-md py-2 indent-2 "
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                  onChange={formik.handleChange}
                />
                {formik.touched.name && formik.errors.name ? (
                  <p className="text-red-700 font-bold text-sm">
                    {formik.errors.name}
                  </p>
                ) : null}
              </div>
              <div className="flex flex-col gap-2 mb-2">
                <label
                  className="text-sm font-semibold text-slate-100"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="rounded-md py-2 indent-2 "
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
                {formik.touched.email && formik.errors.email ? (
                  <p className="text-red-700 font-bold text-sm">
                    {formik.errors.email}
                  </p>
                ) : null}
              </div>
              <div className="flex flex-col gap-2 mb-2">
                <label
                  className="text-sm font-semibold text-slate-100"
                  htmlFor="subject"
                >
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  className="rounded-md py-2 indent-2 "
                  onBlur={formik.handleBlur}
                  value={formik.values.subject}
                  onChange={formik.handleChange}
                />
                {formik.touched.subject && formik.errors.subject ? (
                  <p className="text-red-700 font-bold text-sm">
                    {formik.errors.subject}
                  </p>
                ) : null}
              </div>
              <div className="flex flex-col gap-2 mb-2">
                <label
                  className="text-sm font-semibold text-slate-100"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  onChange={formik.handleChange}
                  value={formik.values.message}
                  className="rounded-md py-2 indent-2 resize-none"
                  onBlur={formik.handleBlur}
                  cols="30"
                  rows="4"
                ></textarea>
                {formik.touched.message && formik.errors.message ? (
                  <p className="text-red-700 font-bold text-sm">
                    {formik.errors.message}
                  </p>
                ) : null}
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
  );
};

export default ContactMe;
