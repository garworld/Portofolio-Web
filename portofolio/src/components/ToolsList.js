import TS from "../assets/ts-logo.png";
import reactLogo from "../assets/react-logo.png";
import nodejs from "../assets/node-js.jpg";

export default function ToolsList() {
  const tools = [
    {
      tool: "Typescript",
      desc: " programming language that is often used to develop interactive and dynamic web.",
      img: TS,
    },
    {
      tool: "React",
      desc: "JavaScript library for building interactive web interfaces.",
      img: reactLogo,
    },
    {
      tool: "Node Js",
      desc: "JavaScript runtime for building scalable, real-time server-side web applications.",
      img: nodejs,
    },
  ];
  return (
    <div className="w-full h-full bg-gray-900 dark:bg-slate-300 flex flex-col pb-14">
      <div
        className=" w-full text-white dark:text-gray-900 font-bold text-2xl lg:text-3xl pb-6 text-center md:text-left lg:text-left"
        data-aos="fade-right"
      >
        Tools 🛠️
      </div>
      <div className="w-full flex-col flex md:flex-row lg:flex-row gap-4 px-8">
        {tools.map((val, idx) => {
          return (
            <div
              className="flex p-3 w-full rounded-xl bg-slate-600 dark:bg-gray-900 shadow-lg gap-3"
              data-aos="fade-right"
              data-aos-delay={idx * 100}
            >
              <div className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20">
                <img alt="" src={val.img} className="rounded-lg bg-cover" />
              </div>
              <div className="w-3/4">
                <div className="text-white text-sm md:text-base lg:text-lg font-bold">
                  {val.tool}
                </div>
                <div className="text-xs md:text-sm lg:text-base text-slate-300">
                  {val.desc}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
