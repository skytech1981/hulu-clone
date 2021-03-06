import React from 'react'
import "./header.css";
import HomeIcon from "@material-ui/icons/Home";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import SearchIcon from "@material-ui/icons/Search";
import PersonOutlinedIcon from "@material-ui/icons/PersonOutlined";



function Header() {
    return (
        <div className="header">
          
          <div className="header__icons">
            {/* here all icons */}
            <div className="header__icon header__icon--active" >
            <HomeIcon/>
            <p>Home</p>
            </div>
            <div className="header__icon">
            <FlashOnIcon/>
            <p>Trending</p>
            </div>
            <div className="header__icon">
            <LiveTvIcon/>
            <p>Live Tv</p>
            </div>
            <div className="header__icon">
            <VideoLibraryIcon/>
            <p>Video</p>
            </div>
            <div className="header__icon">
            <SearchIcon/>
            <p>Search</p>
            </div>
            <div className="header__icon">
            <PersonOutlinedIcon/>
            <p>Account</p>
            </div>
         </div>
         <img src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png?fit=1280%2C680" alt=""/>
        </div>
    )
}

export default Header
