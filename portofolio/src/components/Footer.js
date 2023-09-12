import { GrLinkNext } from "react-icons/gr";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const nav = useNavigate();
  return (
    <div className="w-full h-full bg-gray-900 dark:bg-slate-300 md:flex lg:flex text-white dark:text-gray-900 lg:gap-52 p-4 md:p-0 lg:p-0">
      <div className="w-full font-semibold" data-aos="fade-up">
        <div className="text-base md:text-lg lg:text-3xl pb-14">
          have questions or interested in collaborating?
        </div>
        <button
          className="text-xs md:text-sm lg:text-base bg-blue-300 dark:bg-blue-900 text-blue-900 dark:text-blue-300 p-3 flex items-center gap-2 rounded-full transition-all hover:bg-white"
          onClick={() => {
            nav("/contact");
          }}
        >
          Let's Talk!
          <GrLinkNext />
        </button>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/2 text-center md:text-left lg:text-left text-xs lg:text-base pt-11 md:pt-0 lg:pt-0">
        <div className="text-gray-400 dark:text-gray-800" data-aos="fade-up">
          Speak with me
        </div>
        <div
          className="text-white dark:text-black leading-7"
          data-aos="fade-up"
        >
          ✉️ suryanegarasinatriyya@gmail.com
          <br />
          🤙 +62 859 5605 6470
        </div>
        <div
          className="text-gray-400 dark:text-gray-800 pt-4"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Location
        </div>
        <div
          className="text-white dark:text-black leading-7"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          🏠 Bandung City, West Java, Indonesia
        </div>
        <div
          className="text-gray-400 dark:text-gray-800 pt-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Find me on Social
        </div>
        <div className="flex gap-3 pt-2 justify-center md:justify-start lg:justify-start">
          <a
            href="https://www.instagram.com/garasuryanegara/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="w-12 h-12 bg-slate-500 rounded-full flex justify-center items-center"
              data-aos="fade-left"
              data-aos-delay="500"
            >
              <BsInstagram className="text-2xl" />
            </button>
          </a>
          <a
            href="https://github.com/Garasuryanegara"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="w-12 h-12 bg-slate-500 rounded-full flex justify-center items-center"
              data-aos="fade-left"
              data-aos-delay="800"
            >
              <BsGithub className="text-2xl" />
            </button>
          </a>
          <a
            href="https://www.linkedin.com/in/mochammad-sinatriyya-suryanegara/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="w-12 h-12 bg-slate-500 rounded-full flex justify-center items-center"
              data-aos="fade-left"
              data-aos-delay="1100"
            >
              <BsLinkedin className="text-2xl" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
