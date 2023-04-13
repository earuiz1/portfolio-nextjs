import React, { useState } from "react";
import ContactInfo from "./ContactInfo";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import * as Yup from "yup";
import { sendContactForm } from "../../lib/api";
import Header from "../UI/Header";
import { Fade } from "react-awesome-reveal";
import { HiOutlineMail } from "react-icons/hi";
import { HiOutlineMapPin } from "react-icons/hi2";
import { BsWhatsapp } from "react-icons/bs";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { RiSendPlaneLine } from "react-icons/ri";

const Contact = () => {
  /**
   * The function is called when the form is submitted. It takes the values from the form and sends them
   * to the sendContactForm function. Then it resets the form.
   */

  const [loading, setLoading] = useState(false);

  const info = [
    {
      href: "mailto:earuiz1196@gmail.com",
      name: "earuiz1196@gmail.com",
      icon: <HiOutlineMail size={40} />,
    },
    {
      href: "tel:+19563138128",
      name: "(956)-313-8128",
      icon: <BsWhatsapp size={40} />,
    },
  ];

  const onSubmit = async (values, { resetForm }) => {
    setLoading(true);
    try {
      await sendContactForm(values);

      //Show toast
      toast.success("Message sent", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      setLoading(false);
      setError(null);

      //Reseting the form inputs fields after submission
      resetForm({ values: "" });
    } catch (error) {
      setLoading(false);
      //Show toast
      toast.error(`${error.message}`, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
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
      <Fade direction="left" triggerOnce duration={2000}>
        <div className="grid grid-cols-12 mx-10 md:mx-20 my-20 gap-x-4 gap-y-8">
          {info.map((info_item) => {
            return (
              <ContactInfo
                href={info_item.href}
                name={info_item.name}
                icon={info_item.icon}
              />
            );
          })}
          <div className="bg-[#D9D9D9] flex flex-col items-center justify-center h-[180px] rounded-md md:col-span-4 col-span-full gap-2 hover:-translate-y-2">
            <HiOutlineMapPin size={40} />
            <span className="font-light text-sm md:text-base">
              Edinburg, Texas
            </span>
            <span className="font-light text-sm md:text-base ">
              United States
            </span>
          </div>
          {/* Form Container */}
          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col col-span-12 gap-4"
          >
            <div className="flex flex-col gap-2 mb-2">
              <label
                className="text-sm md:text-base lg:text-lg font-semibold text-slate-900"
                htmlFor="name"
              >
                Full Name
              </label>
              <input
                type="text"
                name="name"
                className="text-sm rounded-md py-2 indent-2 bg-[#D9D9D9] outline-none focus:border-2 active:border-2 focus:border-blue-700 active:border-blue-700"
                onBlur={formik.handleBlur}
                value={formik.values.name}
                onChange={formik.handleChange}
              />
              {formik.touched.name && formik.errors.name ? (
                <p className="text-red-600  font-bold text-sm md:text-base">
                  {formik.errors.name}
                </p>
              ) : null}
            </div>
            <div className="flex flex-col gap-2 mb-2">
              <label
                className="text-sm md:text-base lg:text-lg font-semibold text-slate-900"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                className="text-sm rounded-md py-2 indent-2 bg-[#D9D9D9] outline-none focus:border-2 active:border-2 focus:border-blue-700 active:border-blue-700"
                onBlur={formik.handleBlur}
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              {formik.touched.email && formik.errors.email ? (
                <p className="text-red-600  font-bold text-sm md:text-base">
                  {formik.errors.email}
                </p>
              ) : null}
            </div>
            <div className="flex flex-col gap-2 mb-2">
              <label
                className="text-sm md:text-base lg:text-lg  font-semibold text-slate-900"
                htmlFor="subject"
              >
                Subject
              </label>
              <input
                type="text"
                name="subject"
                className="text-sm rounded-md py-2 indent-2 bg-[#D9D9D9] outline-none focus:border-2 active:border-2 focus:border-blue-700 active:border-blue-700"
                onBlur={formik.handleBlur}
                value={formik.values.subject}
                onChange={formik.handleChange}
              />
              {formik.touched.subject && formik.errors.subject ? (
                <p className="text-red-600  font-bold text-sm md:text-base">
                  {formik.errors.subject}
                </p>
              ) : null}
            </div>
            <div className="flex flex-col gap-2 mb-2">
              <label
                className="text-sm md:text-base lg:text-lg font-semibold text-slate-900"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                name="message"
                onChange={formik.handleChange}
                value={formik.values.message}
                className="text-sm rounded-md py-2 indent-2 bg-[#D9D9D9] resize-none outline-none focus:border-2 active:border-2 focus:border-blue-700 active:border-blue-700"
                onBlur={formik.handleBlur}
                cols="30"
                rows="4"
              ></textarea>
              {formik.touched.message && formik.errors.message ? (
                <p className="text-red-600  font-bold text-sm md:text-base">
                  {formik.errors.message}
                </p>
              ) : null}
            </div>
            {loading ? (
              <button
                type="submit"
                className="flex justify-center items-center bg-slate-900  py-3 rounded-md w-full gap-2"
              >
                <AiOutlineLoading3Quarters
                  size={25}
                  className="animate-spin fill-slate-100"
                />
                <span className="text-sm md:text-base lg:text-lg text-slate-100 font-semibold">
                  Loading...
                </span>
              </button>
            ) : (
              <button
                type="submit"
                className="flex justify-center items-center bg-slate-900  py-3 rounded-md w-full gap-2"
              >
                <RiSendPlaneLine size={25} className="fill-slate-100" />
                <span className="text-sm md:text-base lg:text-lg text-slate-100 font-semibold">
                  Send Message
                </span>
              </button>
            )}
          </form>
        </div>
      </Fade>
    </section>
  );
};

export default Contact;
