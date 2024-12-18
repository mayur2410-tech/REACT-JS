import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import logo from "../assets/logo.png";
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { FaRegBell } from "react-icons/fa";
import profile from "../assets/profile.jpeg";
import Avatar from "react-avatar";
const Navbar = () => {
  return (
    <div className="flex bg-white justify-between fixed top-0 w-[100%] px-6 py-2">
      <div className="items-center flex space-x-5 ">
        <AiOutlineMenu className="text-xl cursor-pointer" />
        <img src={logo} alt="" className="w-28 cursor-pointer" />
      </div>
      <div className=" w-[35%]  flex items-center">
        <div className="w-[100%] px-3 py-2 border rounded-l-full">
          <input type="text" placeholder="Search" className="outline-none " />
        </div>
        <button className="px-4 py-2 rounded-r-full border bg-gray-100">
          <CiSearch size={24} />
        </button>
        <IoMdMic
          size={40}
          className="ml-3 rounded-full p-2 cursor-pointer border hover:bg-gray-200 duration-200"
        />
      </div>
      <div className=" flex  space-x-5 items-center">
        <RiVideoAddLine className="text-2xl" />
        <FaRegBell className="text-2xl" />
        <Avatar src={profile} size="32" round={true} />
      </div>
    </div>
  );
};

export default Navbar;
