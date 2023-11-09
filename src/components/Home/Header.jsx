import menIcon from "../../assets/images/header.png";
import { FaLocationArrow } from "react-icons/fa";
import {BsFillCalendar2DateFill} from 'react-icons/bs'

const Header = () => {
  return (
    <div className="max-w-[1300px] overflow-x-hidden pt-2">
      <div className="flex flex-col md:flex-row items-center  md:justify-around gap-7">
        <div className="w-full flex items-center flex-col text-center md:text-left md:items-start">
          <h1 className="text-[35px] lg:text-[40px] xl:text-[65px] w-full sm:max-w-[400px] leading-[50px] lg:leading-[70px] font-[800] text-black  mb-2">
            Discover the Best Lovely Places
          </h1>
          <p className="flex text-base lg:text-[18px] mb-4 mt-3 sm:max-w-[400px] lg:max-w-[550px] text-secondBlack font-normal">
            We have 100k+ monthly active user all over world, to witness for
            some amazing tour, travels and adventures - join with us now.
          </p>
          <div className="flex items-center gap-2 w-full lg:max-w-[550px]">
            <div className="flex items-center  lg:w-full bg-white w-full px-7 py-[10px] rounded-full shadow-lg">
              <div className="text-base font-medium items-start flex flex-col w-full">
                <label htmlFor="">Where you go</label>
                <div className="flex mt-1 items-center w-full justify-between gap-1">
                  <input
                    type="text"
                    className="border-none outline-none placeholder:font-normal text-black bg-transparent w-full"
                    placeholder="Dhaka, Bangladesh"
                  />
                  <span className="text-primary">
                    <FaLocationArrow size={20} />
                  </span>
                </div>
              </div>
              <div className="w-[2px] px-[1px] h-[40px] mx-3 sm:mx-7 md:mx-3 lg:mx-7 bg-[#EAEAEB]"></div>
              <div className="text-base font-medium flex flex-col items-start w-full">
                <label htmlFor="" className="">Where you go</label>
                <div className="flex mt-1 items-center justify-between gap-1">
                  <input
                    type="text"
                    className="border-none outline-none placeholder:font-normal text-black bg-transparent w-full"
                    placeholder="Dhaka, Bangladesh"
                  />
                  <span className="text-primary">
                    <BsFillCalendar2DateFill size={20} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-[450px] relative w-full ">
          <img
            src={menIcon}
            className="max-w-[350px] sm:max-w-[400px] mx-auto md:w-full z-[999]"
            alt=""
          />
        </div>
      </div>

      <div className="w-full hidden absolute bottom-[50px] left-[0] lg:flex flex-col gap-[10px] items-center justify-center">
        <a href="#recent-blog" className="mouseLoader"></a>
        <small className="capitalize text-[15px] font-normal  text-[#848484]">
          Scroll to see our recent blogs
        </small>
      </div>
    </div>
  );
};

export default Header;
