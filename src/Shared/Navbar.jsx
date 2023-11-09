import { Link, useLocation } from "react-router-dom";
import { CgMenuRightAlt } from "react-icons/cg";
import { useEffect, useState } from "react";
// import { AuthContext } from "../Provider/AuthProvider";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { Logo } from "../assets/icon";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  //   const { user, logOutUser } = useContext(AuthContext);
  const user = {};

  const itemList = (
    <>
      <Link
        to="/"
        onClick={() => setIsMenuOpen(false)}
        className={`${
          isMenuOpen
            ? location.pathname === "/"
              ? "text-black  font-medium border-b-[3px] border-b-black w-fit mx-auto"
              : "text-black  font-medium"
            : location.pathname === "/"
            ? "text-black  font-medium border-b-[3px] border-b-primary w-fit mx-auto"
            : "text-black hover:text-primary font-medium"
        } duration-150 cursor-pointer`}
      >
        Home
      </Link>
      <Link
        to="/destination"
        onClick={() => setIsMenuOpen(false)}
        className={`${
          isMenuOpen
            ? location.pathname === "/destination"
              ? "text-black  font-medium border-b-[3px] border-b-black w-fit mx-auto"
              : "text-black  font-medium"
            : location.pathname === "/destination"
            ? "text-black  font-medium border-b-[3px] border-b-primary w-fit mx-auto"
            : "text-black hover:text-primary font-medium"
        } duration-150 cursor-pointer`}
      >
        Destination
      </Link>
      <Link
        to="/about"
        onClick={() => setIsMenuOpen(false)}
        className={`${
          isMenuOpen
            ? location.pathname === "/about"
              ? "text-black  font-medium border-b-[3px] border-b-black w-fit mx-auto"
              : "text-black  font-medium"
            : location.pathname === "/about"
            ? "text-black  font-medium border-b-[3px] border-b-primary w-fit mx-auto"
            : "text-black hover:text-primary font-medium"
        } duration-150 cursor-pointer`}
      >
        About
      </Link>
    </>
  );

  // For Scroll Shadow in Navbar
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogout = () => {
    //
  };
  return (
    <div
      className={`${
        isVisible && "shadow-md duration-150 "
      } fixed w-full z-[999] top-0`}
    >
      <div className="hidden md:flex  items-center justify-between max-w-[1300px] mx-auto py-4 px-5 pl-[18px]">
        <div className="mt-[-3px]">
          <Logo />
        </div>
        <div>
          <ul className="flex gap-4 text-base font-medium">{itemList}</ul>
        </div>

        {!user?.accessToken ? (
          <div className="flex gap-3 items-center">
            <Link
              to="/login"
              className="text-base hidden lg:flex hover:underline hover:text-primary font-[600]"
            >
              Log in
            </Link>
            <Link
              to="/register"
              className="bg-primary hover:bg-darkPrimary duration-200  text-white text-base hover:shadow-xl shadow-md font-[500] py-[6px] px-[14px] rounded-md"
            >
              Register
            </Link>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <button
              onClick={handleLogout}
              type="button"
              className="flex items-center gap-1 hover:shadow-lg duration-100 text-[15px] font-medium border h-[30px] rounded-full px-2"
            >
              <RiLogoutCircleRLine />
              Logout
            </button>
            <img
              src={
                user?.photoURL ||
                "https://i.ibb.co/zXw7H0W/360-F-107434511-iar-F2z88c6-Ds6-Algtwot-HSAkt-WCd-YOn7.jpg"
              }
              alt=""
              className="w-[36px] h-[36px] rounded-full border-[3px] object-cover border-primary"
            />
          </div>
        )}
      </div>

      <div className="py-4 block md:hidden px-5 pl-[18px] max-w-[1300px] mx-auto">
        <div className="flex items-center justify-between">
          <Logo />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="z-[99999]"
          >
            <CgMenuRightAlt
              size={28}
              className={`${
                isMenuOpen
                  ? "text-white hover:text-secondBlack"
                  : "text-primary hover:text-secondBlack"
              }  duration-100`}
            />
          </button>
        </div>
        <div
          className={`absolute flex justify-center items-center top-0 left-0 bg-primary duration-200 h-screen z-[999] w-full ${
            isMenuOpen ? "left-[0] opacity-100 ml-0 " : "left-[-100%] opacity-0"
          } transition-all duration-300 ease-in`}
        >
          <ul
            className={`text-center text-white text-base font-medium tracking-wide flex flex-col gap-4 w-fit`}
          >
            {itemList}

            {user?.accessToken ? (
              <div className="flex items-center gap-2">
                <button
                  onClick={handleLogout}
                  type="button"
                  className="flex items-center gap-1 hover:shadow-lg duration-100 text-base font-medium border border-secondBlack text-secondBlack h-[30px] rounded-full px-2"
                >
                  <RiLogoutCircleRLine />
                  Logout
                </button>
                <img
                  src={
                    user?.photoURL ||
                    "https://i.ibb.co/zXw7H0W/360-F-107434511-iar-F2z88c6-Ds6-Algtwot-HSAkt-WCd-YOn7.jpg"
                  }
                  alt=""
                  className="w-[40px] h-[40px] rounded-full border-[3px] object-cover border-secondBlack"
                />
              </div>
            ) : (
              <div className="flex gap-3 items-center mt-3">
                <Link
                  to="/login"
                  className="bg-secondBlack hover:font-medium hover:text-primary duration-200  text-white text-base hover:shadow-xl shadow-md font-[500] py-[6px] px-[14px] rounded-md"
                >
                  Log in
                </Link>
                <Link
                  to="/register"
                  className="bg-secondBlack hover:text-primary duration-200  text-white text-base hover:shadow-xl hover:font-medium shadow-md font-[500] py-[6px] px-[14px] rounded-md"
                >
                  Register
                </Link>
              </div>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
