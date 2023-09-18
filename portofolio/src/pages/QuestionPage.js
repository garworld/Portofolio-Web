import { GrLinkNext } from "react-icons/gr";
import "../App.css";
import { useEffect, useRef, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { Spinner, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function QuestionPage() {
  const form = useRef();
  const toast = useToast();
  const nav = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required("This field is required!"),
      email: Yup.string()
        .required("This field is required!")
        .email("Invalid. Write like this example@mail.com"),
      subject: Yup.string().required("This field is required!"),
      message: Yup.string().required("This field is required!"),
    }),
    onSubmit: (e) => {
      try {
        // e.preventDefault();
        setIsLoading(true);
        emailjs
          .sendForm(
            process.env.REACT_APP_SERVICEID,
            process.env.REACT_APP_TEMPLATEID,
            form.current,
            process.env.REACT_APP_PROVIDERID
          )
          .then(
            (result) => {
              console.log(result.text);
              setIsLoading(false);
              toast({
                title: "Thank You!",
                description: "Your Message Successfully Sent.",
                status: "success",
                duration: 3000,
                position: "top",
              });
              return nav("/");
            },
            (error) => {
              console.log(error.text);
            }
          );
      } catch (err) {
        console.log(err);
      }
    },
  });
  const inputHandler = async (e) => {
    const { id, value } = e.target;
    formik.setFieldValue(id, value);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="w-full h-full bg-gray-900 dark:bg-slate-300 lg:px-32">
        <div className="flex justify-center p-5 sm:px-20 md:p-5 lg:p-5 ">
          <div className=" w-full md:w-3/5 lg:w-3/5 text-white  text-center p-5 rounded-lg border border-blue-400 dark:border-blue-950 dark:bg-gray-900">
            <div className="font-bold text-xl md:text-2xl lg:text-3xl pb-7 animate__animated animate__fadeIn">
              Send me a message
            </div>
            <div className="font-semibold text-base md:text-lg lg:text-xl text-blue-300 pb-6 animate__animated animate__fadeIn">
              Write down any questions, feedback, or brilliant ideas you have,
              and let me know about it!
            </div>
            <form ref={form}>
              <div className="text-sm md:text-base lg:text-lg font-medium text-left flex flex-col gap-7 animate__animated animate__fadeIn">
                <box
                  className={`inputbox ${
                    formik.values.name ? "input-has-value" : ""
                  }`}
                >
                  <input
                    className={`bg-transparent border p-1 w-full h-10 px-3 rounded-md outline-none ${
                      formik.errors.name ? "border-red-500" : "border-blue-300"
                    } `}
                    name="name"
                    id="name"
                    onChange={inputHandler}
                  />
                  <label
                    className={`${
                      formik.errors.name ? "text-red-500" : "text-white "
                    }`}
                  >
                    Name
                  </label>
                  <box
                    className={`text-red-500 text-xs pt-3 pl-3 ${
                      formik.errors.name ? "box" : "none"
                    }`}
                  >
                    {formik.errors.name}
                  </box>
                </box>
                <box
                  className={`inputbox ${
                    formik.values.email ? "input-has-value" : ""
                  }`}
                >
                  <input
                    className={`bg-transparent border p-1 w-full h-10 px-3 rounded-md outline-none ${
                      formik.errors.email ? "border-red-500" : "border-blue-300"
                    } `}
                    name="email"
                    id="email"
                    onChange={inputHandler}
                  />
                  <label
                    className={`${
                      formik.errors.email ? "text-red-500" : "text-white"
                    }`}
                  >
                    Email
                  </label>
                  <box
                    className={`text-red-500 text-xs pt-3 pl-3 ${
                      formik.errors.email ? "box" : "none"
                    }`}
                  >
                    {formik.errors.email}
                  </box>
                </box>
                <box
                  className={`inputbox ${
                    formik.values.subject ? "input-has-value" : ""
                  }`}
                >
                  <input
                    className={`bg-transparent border p-1 w-full h-10 px-3 rounded-md outline-none ${
                      formik.errors.subject
                        ? "border-red-500"
                        : "border-blue-300"
                    } `}
                    name="subject"
                    id="subject"
                    onChange={inputHandler}
                  />
                  <label
                    className={`${
                      formik.errors.subject ? "text-red-500" : "text-white"
                    }`}
                  >
                    Subject
                  </label>
                  <box
                    className={`text-red-500 text-xs pt-3 pl-3 ${
                      formik.errors.subject ? "box" : "none"
                    }`}
                  >
                    {formik.errors.subject}
                  </box>
                </box>
                <div>
                  <label
                    className={`pl-1 text-base ${
                      formik.errors.message ? "text-red-500" : "text-white"
                    }`}
                  >
                    Message
                  </label>
                  <textarea
                    placeholder="Enter a message"
                    className={`bg-transparent border p-1 w-full px-3 rounded-md outline-none ${
                      formik.errors.message
                        ? "border-red-500"
                        : "border-blue-300"
                    } `}
                    name="message"
                    id="message"
                    onChange={inputHandler}
                  ></textarea>
                  <box
                    className={`text-red-500 text-xs pt-3 pl-3 ${
                      formik.errors.message ? "box" : "none"
                    }`}
                  >
                    {formik.errors.message}
                  </box>
                </div>
                <div className="pb-2 pt-3">
                  <button
                    className="text-xs md:text-sm lg:text-base bg-blue-300 text-blue-900 p-3 flex items-center gap-2 rounded-full transition-all hover:bg-white"
                    type="submit"
                    onClick={formik.handleSubmit}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <Spinner />
                    ) : (
                      <>
                        Submit
                        <GrLinkNext />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="w-full text-white dark:text-gray-900 text-xs lg:text-sm flex justify-center text-center py-9 px-10">
          Designed & coded by Mochammad Sinatriyya Suryanegara @ 2023
        </div>
      </div>
    </>
  );
}
