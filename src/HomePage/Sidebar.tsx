import React from 'react';
import { Link, useLocation } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchIcon from '@mui/icons-material/Search';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import LogoutIcon from '@mui/icons-material/Logout';
import logo from './green-logo.png';

interface SidebarProps {
  logout: () => void
}

const Sidebar: React.FC<SidebarProps> = (props) => {
  function handlePlay() {
    props.logout();
  }
  const location = useLocation();
  return (
    <div className="sidebar fixed bg-[#1ed760] h-[95vh] w-1/6 text-white">

      <Link to="/" className="textDecoration:none  ">
        <img className="sidebar__logo" src={logo} alt="" />
      </Link>

      <Link to="/" className={location.pathname === "/" ?
        "flex cursor-pointer rounded-l-full text-[#1ed760] bg-white h-[30px] pl-[20px] items-center" :
        "flex cursor-pointer rounded-l-full text-white bg-[#1ed760] h-[30px] pl-[20px] items-center hover:bg-white hover:text-[#1ed760]"}>
        {<HomeOutlinedIcon className="pr-[5px]" />}
        {<div> Home</div>}
      </Link>

      <Link to="profile" className={location.pathname === "/profile" ?
        "flex cursor-pointer rounded-l-full text-[#1ed760] bg-white h-[30px] pl-[20px] items-center" :
        "flex cursor-pointer rounded-l-full text-white bg-[#1ed760] h-[30px] pl-[20px] items-center hover:bg-white hover:text-[#1ed760]"} >
        {<AccountCircleIcon className="pr-[5px]" />}
        {<div> Profile</div>}
      </Link>

      <Link to="search" className={location.pathname === "/search" ?
        "flex cursor-pointer rounded-l-full text-[#1ed760] bg-white h-[30px] pl-[20px] items-center" :
        "flex cursor-pointer rounded-l-full text-white bg-[#1ed760] h-[30px] pl-[20px] items-center hover:bg-white hover:text-[#1ed760]"} >
        {<SearchIcon className="pr-[5px]" />}
        {<div> Search</div>}
      </Link>

      <div className="flex cursor-pointer rounded-l-full text-white bg-[#1ed760] h-[30px] pl-[20px] items-center hover:bg-white hover:text-[#1ed760]">
        {<QueueMusicIcon className="pr-[5px]" />}
        {<div>Featured Playlist</div>}
      </div>

      <div className='absolute bottom-[3vh] left-0 w-[100%] flex cursor-pointer rounded-l-full text-white bg-[#1ed760] h-[30px] pl-[20px] items-center hover:bg-white hover:text-[#1ed760] ' onClick={handlePlay}>
        {<LogoutIcon className='pr-[5px]' />}
        {<div>Logout</div>}
      </div>

    </div>
  )
}

export default Sidebar