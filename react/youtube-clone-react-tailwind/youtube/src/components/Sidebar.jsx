import React from "react";
import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { GoHistory } from "react-icons/go";
import { MdPlaylistPlay } from "react-icons/md";
import { PiVideoLight } from "react-icons/pi";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { FaChevronRight } from "react-icons/fa";
import { LiaFireAltSolid } from "react-icons/lia";
import { RiShoppingBag4Line } from "react-icons/ri";
import { IoMusicalNoteOutline } from "react-icons/io5";
import { PiFilmSlateDuotone } from "react-icons/pi";
import { CgMediaLive } from "react-icons/cg";
import { SiYoutubegaming } from "react-icons/si";
import { FaRegNewspaper } from "react-icons/fa";
import { GiDiamondTrophy } from "react-icons/gi";
import { SiStylelint } from "react-icons/si";
import { PiLightbulbLight } from "react-icons/pi";
import { MdPodcasts } from "react-icons/md";
import { FaYoutube } from "react-icons/fa6";
import { SiYoutubestudio } from "react-icons/si";
import { SiYoutubemusic } from "react-icons/si";
import { SiYoutubekids } from "react-icons/si";
const Sidebar = () => {
  const sidebarItems = [
    { id: 1, name: "Home", icon: <GoHome /> },
    { id: 2, name: "Shorts", icon: <SiYoutubeshorts /> },
    { id: 3, name: "Subscription", icon: <MdOutlineSubscriptions /> },
  ];
  const sidebarItems2 = [
    { id: 1, name: "Your Channel", icon: <CgProfile /> },
    { id: 2, name: "History", icon: <GoHistory /> },
    { id: 3, name: "Playlists", icon: <MdPlaylistPlay /> },
    { id: 4, name: "Your Videos", icon: <PiVideoLight /> },
    { id: 5, name: "Watch Later", icon: <MdOutlineWatchLater /> },
    { id: 6, name: "Liked Videos", icon: <AiOutlineLike /> },
  ];
  const sidebarItems3 = [
    { id: 1, name: "Trending", icon: <LiaFireAltSolid /> },
    { id: 2, name: "Shopping", icon: <RiShoppingBag4Line /> },
    { id: 3, name: "Music", icon: <IoMusicalNoteOutline /> },
    { id: 4, name: "Movies", icon: <PiFilmSlateDuotone /> },
    { id: 5, name: "Live", icon: <CgMediaLive /> },
    { id: 6, name: "Gaming", icon: <SiYoutubegaming /> },
    { id: 7, name: "News", icon: <FaRegNewspaper /> },
    { id: 8, name: "Sports", icon: <GiDiamondTrophy /> },
    { id: 9, name: "Courses", icon: <SiStylelint /> },
    { id: 10, name: "Fashion & Beauty", icon: <PiLightbulbLight /> },
    { id: 11, name: "Podcasts", icon: <MdPodcasts /> },
  ];
  const sidebarItems4 = [
    { id: 1, name: "Youtube Premium", icon: <FaYoutube /> },
    { id: 2, name: "Youtube Studio", icon: <SiYoutubestudio /> },
    { id: 3, name: "Youtube Music", icon: <SiYoutubemusic /> },
    { id: 4, name: "Youtube Kids", icon: <SiYoutubekids /> },
  ];
  return (
    <div className="px-6 w-[15.8%] h-[calc(100vh-6.625rem)] overflow-x-hidden overflow-y-scroll mt-16">
      <div className="space-y-3 items-center">
        {sidebarItems.map((items) => {
          return (
            <div
              key={items.id}
              className="flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1"
            >
              <div className="text-xl cursor-pointer">{items.icon} </div>
              <span className="cursor-pointer">{items.name}</span>
            </div>
          );
        })}
      </div>
      <br />
      <hr />
      {/* you section */}
      <div className="mt-4 space-y-3 items-center">
        <div className="flex items-center space-x-2">
          <h1>You</h1>
          <span>
            <FaChevronRight />
          </span>
        </div>
        {sidebarItems2.map((items) => {
          return (
            <div
              key={items.id}
              className="flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1"
            >
              <div className="text-xl cursor-pointer ">{items.icon} </div>
              <span className="cursor-pointer">{items.name}</span>
            </div>
          );
        })}
      </div>
      <br />
      <hr />
{/* explore section  */}
<div className="mt-4 space-y-3 items-center">
        <div className="flex items-center space-x-2">
          <h1 className="font-semibold">Explore</h1>
         
        </div>
        {sidebarItems3.map((items) => {
          return (
            <div
              key={items.id}
              className="flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1"
            >
              <div className="text-xl cursor-pointer">{items.icon} </div>
              <span className="cursor-pointer">{items.name}</span>
            </div>
          );
        })}
      </div>
      <br />
      <hr />
      {/* more from youtube */}
      <div className="mt-4 space-y-3 items-center">
        <div className="flex items-center space-x-2">
          <h1 className="font-semibold">More from YouTube </h1>
         
        </div>
        {sidebarItems4.map((items) => {
          return (
            <div
              key={items.id}
              className="flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1"
            >
              <div className="text-xl cursor-pointer text-red-500">{items.icon} </div>
              <span className="cursor-pointer">{items.name}</span>
            </div>
          );
        })}
      </div>
      <br />
      <hr />
    </div>
  );
};

export default Sidebar;
