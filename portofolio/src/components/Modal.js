import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { AiOutlineClose } from "react-icons/ai";
import "swiper/css";
import "swiper/css/navigation";

export default function ModalUI(props) {
  const { onClose, selectedItem } = props;
  return (
    <>
      <div className="flex justify-between pb-5">
        <div className="text-xl font-bold text-blue-900">
          {selectedItem.title} User Interface
        </div>
        <div
          onClick={() => {
            onClose();
          }}
        >
          <AiOutlineClose className="text-2xl hover:cursor-pointer" />
        </div>
      </div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {selectedItem?.link &&
          selectedItem?.link.map((val) => {
            return (
              <SwiperSlide className="w-80 h-48">
                <img src={val} className="w-[544px] h-[312px] object-contain" />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </>
  );
}
