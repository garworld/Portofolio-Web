import Lottie from "lottie-react";
import laptop from "../assets/animation_lm5z2tgj.json";
import TypeIt from "typeit-react";
import "animate.css";

export default function Intorduction() {
  function getIntroText(instance) {
    instance
      .pause(1000)
      .type("A Web develover")
      .pause(750)
      .delete(3)
      .pause(500)
      .type("per")
      .pause(500)
      .move(-8)
      .delete(1)
      .type("D")
      .pause(500)
      .move(8)
      .type(" ")
      .pause(10000)
      .go();
    return instance;
  }
  return (
    <div className="w-full h-full bg-gray-900 dark:bg-slate-300 md:flex lg:flex pb-14">
      <div className="md:w-1/2 lg:w-2/4 text-white dark:text-gray-900 flex items-center justify-center md:justify-end lg:justify-end pt-7">
        <div className="font-extrabold text-xl lg:text-3xl space-y-2 w-10/12 text-center md:text-left lg:text-left">
          <div className="text-blue-300 dark:text-gray-700 animate__animated animate__fadeInUp">
            Hi!👋
            <br />
            I'm Sinatriyya Suryanegara,
          </div>
          <div className="text-3xl lg:text-5xl pt-4 text-white dark:text-gray-900">
            <TypeIt
              id="myTypeIt"
              options={{
                loop: true,
                cursorSpeed: 1000,
                speed: 100,
              }}
              getBeforeInit={getIntroText}
            />
          </div>
          <div className="text-xl lg:text-2xl pt-6 pb-6 text-blue-600 animate__animated animate__fadeInUp">
            Create and develop websites using modern technologies
          </div>
          <a
            href="https://drive.google.com/file/d/101rQ4c6vKvvB1gijT-5RAKUF5zhm8sum/view?usp=sharing"
            target="_blank"
          >
            <button className="p-2 w-max h-max text-base rounded text-white dark:text-blue-900 border-white dark:border-blue-900 border transition-all hover:dark:text-slate-300 hover:dark:bg-blue-700 hover:text-blue-300 hover:border-blue-300 animate__animated animate__fadeInUp">
              Check out my CV
            </button>
          </a>
        </div>
      </div>
      <div className=" md:w-1/2 lg:w-2/4 flex items-center">
        <div className=" md:w-10/12 lg:w-11/12 animate__animated animate__bounceIn">
          <Lottie animationData={laptop} />
        </div>
      </div>
    </div>
  );
}
