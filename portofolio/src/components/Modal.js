import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { AiOutlineClose } from "react-icons/ai";
import "swiper/css";
import "swiper/css/navigation";

export default function ModalUI(props) {
  const { onClose, selectedItem } = props;
  return (
    <>
      <div className="flex justify-between pb-5 ">
        <div className="text-xl font-bold text-white dark:text-gray-900 ">
          {selectedItem.title} User Interface
        </div>
        <div
          onClick={() => {
            onClose();
          }}
        >
          <AiOutlineClose className="text-2xl hover:cursor-pointer text-white dark:text-blue-800" />
        </div>
      </div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {selectedItem?.link &&
          selectedItem?.link.map((val) => {
            return (
              <SwiperSlide className="w-80 h-48">
                <img
                  alt=""
                  src={val}
                  className="w-[544px] h-[312px] object-contain"
                />
              </SwiperSlide>
            );
          })}
      </Swiper>
      <div className="w-full text-white dark:text-blue-800 font-semibold pt-3">
        Dependencies
      </div>
      <div className="text-white dark:text-blue-800 text-sm">
        <div>Front-End : {selectedItem?.dependencies_fe}</div>
        <div
          className={
            selectedItem?.dependencies_be != undefined ? "block" : "hidden"
          }
        >
          Back-End : {selectedItem?.dependencies_be}
        </div>
      </div>
    </>
  );
}
