import gr from "../assets/gr.png";
import { Switch } from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import "animate.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const nav = useNavigate();
  const [theme, setTheme] = useState(false);
  const element = document.documentElement;
  useEffect(() => {
    switch (theme) {
      case "dark":
        element.classList.add("dark");
        localStorage.setItem("theme", "light");
        break;
      case "light":
        element.classList.remove("dark");
        localStorage.setItem("theme", "dark");
        break;
      default:
        break;
    }
  }, [theme]);
  const scrollToElement = (elementId, offset) => {
    nav("/");
    setTimeout(() => {
      const targetElement = document.getElementById(elementId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop + offset, // Sesuaikan offset jika diperlukan
          behavior: "smooth",
        });
      }
    }, 100);
  };
  return (
    <>
      <div className="w-full h-16 lg:h-20 bg-gray-900 dark:bg-slate-300 px-4 sm:px-20 md:px-4 py-3 flex justify-between drop-shadow-lg sticky top-0 z-30">
        <img
          alt=""
          src={gr}
          className="h-full rounded-md animate__animated animate__fadeInDown"
          onClick={() => nav("/")}
        ></img>
        <div
          className="h-full text-white flex items-center text-3xl animate__animated animate__fadeInDown sm:flex md:hidden"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
        </div>
        <div className="h-full items-center text-md text-white dark:text-gray-900 font-extrabold gap-10 animate__animated animate__fadeInDown hidden md:flex">
          <button
            onClick={() => {
              setIsOpen(false);
              scrollToElement("project", -200);
            }}
          >
            Project
          </button>

          <button
            onClick={() => {
              setIsOpen(false);
              scrollToElement("contact", -150);
            }}
          >
            Contact
          </button>
          <div className="flex items-center gap-3">
            <Switch
              value={theme === "dark" ? "light" : "dark"}
              onChange={(e) => {
                setTheme(e.target.value);
              }}
            />
            {theme === "dark" ? <BsSunFill /> : <BsMoonFill />}
          </div>
        </div>
      </div>
      <div
        className={`w-full h-full lg:h-20 bg-gray-800 dark:bg-slate-300 px-4 sm:px-20 md:px-4 flex flex-col justify-between drop-shadow-lg sticky top-16 z-20 transition-max-height duration-500 ease-in-out overflow-hidden md:hidden lg:hidden`}
        style={{
          maxHeight: isOpen ? "112px" : "0",
        }}
      >
        <div className="h-full w-full flex flex-col items-center text-md text-white dark:text-gray-900 font-extrabold gap-5 ">
          <button
            className="pt-3"
            onClick={() => {
              setIsOpen(false);
              scrollToElement("project", -200);
            }}
          >
            Project 💻
          </button>
          <button
            onClick={() => {
              setIsOpen(false);
              scrollToElement("contact", -150);
            }}
          >
            Contact ✉️
          </button>
        </div>
        <div className="w-full flex justify-end pb-3">
          <div className="flex items-center gap-3 text-white dark:text-gray-900">
            <Switch
              value={theme === "dark" ? "light" : "dark"}
              onChange={(e) => {
                setTheme(e.target.value);
              }}
            />
            {theme === "dark" ? <BsSunFill /> : <BsMoonFill />}
          </div>
        </div>
      </div>
    </>
  );
}
