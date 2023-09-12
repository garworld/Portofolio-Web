import {
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import ssWeb from "../assets/SS-project.png";
import sanyobaWeb from "../assets/sanyoba1.png";
import ModalUI from "./Modal";
import sanyoba1 from "../assets/sanyoba1.png";
import sanyoba2 from "../assets/sanyoba2.png";
import sanyoba3 from "../assets/sanyoba3.png";
import sanyoba4 from "../assets/sanyoba4.png";
import sanyoba5 from "../assets/sanyoba5.png";
import sanyoba6 from "../assets/sanyoba6.png";
import spotify1 from "../assets/spotify1.png";
import spotify2 from "../assets/spotify2.png";
import spotify3 from "../assets/spotify3.png";

import { useState } from "react";

export default function ProjectList() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedItem, setSelectedItem] = useState({});
  console.log(selectedItem);
  const projects = [
    {
      img: ssWeb,
      title: "Sahabat Sembako",
      type: "Online Grocery App",
      button: "View Website",
      desc: "Creating an online grocery web inspired by Segari and Sayur Box web. Responsive website that can be used to shop for kitchen needs from home.",
      link: "https://jcwd020603.purwadhikabootcamp.com/",
    },
    {
      img: sanyobaWeb,
      title: "Sanyoba",
      type: "Point of Sales (POS) App",
      button: "View More UI",
      desc: "Creating an application with a Point of Sales system. can be used as a cashier system in a cafe to help make orders and payments. as well as visualizing sales reports for the admin.",
      link: [sanyoba1, sanyoba2, sanyoba3, sanyoba4, sanyoba5, sanyoba6],
    },
    {
      img: spotify1,
      title: "Spotify Clone",
      type: "Music Player App",
      button: "View More UI",
      desc: "Cloning a login page, register page, and home page of the spotify website. where we can register, login, and listen to some songs.",
      link: [spotify1, spotify2, spotify3],
    },
  ];
  return (
    <>
      <div
        className="w-full h-full bg-gray-900 dark:bg-slate-300 pb-14"
        id={"project"}
      >
        <div
          className="text-white dark:text-gray-900 font-bold text-2xl lg:text-3xl pb-6 text-center md:text-left lg:text-left "
          data-aos="fade-right"
        >
          Projects 💻
        </div>
        <div
          className=" md:flex md:grid-cols-2 md:flex-wrap lg:grid-cols-2 lg:flex-wrap w-full"
          data-aos="fade-right"
        >
          {projects.map((val) => {
            return (
              <div className="w-full h-full md:w-1/2 lg:w-1/2 flex justify-center flex-col">
                <div className="p-8 w-full ">
                  <img
                    src={val.img}
                    className="w-full h-48 md:w-96 md:h-60 lg:w-full lg:h-72 object-contain"
                  ></img>
                </div>
                <div className="font-bold text-white dark:text-gray-900 text-base lg:text-xl px-8">
                  <div className="flex justify-between w-full">
                    <div>
                      <div>{val?.title}</div>
                      <div className="text-blue-200 dark:text-gray-700 text-xs lg:text-base">
                        {val?.type}
                      </div>
                    </div>
                    <button
                      className="h-3/4 text-sm border border-white dark:bg-gray-900 dark:text-slate-300 p-3 rounded-xl transition-all hover:dark:text-blue-700 hover:text-blue-700 hover:border-blue-700"
                      onClick={() => {
                        setSelectedItem(val);
                        if (Array.isArray(val.link)) {
                          onOpen();
                        } else if (typeof val.link === "string") {
                          window.open(val.link, "_blank");
                        }
                      }}
                    >
                      {val?.button}
                    </button>
                  </div>
                  <div className="text-blue-400 dark:text-blue-800 text-sm lg:text-lg pt-2 text-justify">
                    {val?.desc}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent maxW={{ base: "600px", lg: "600px" }} padding={"20px"}>
          <ModalUI onClose={onClose} selectedItem={selectedItem} />
        </ModalContent>
      </Modal>
    </>
  );
}
