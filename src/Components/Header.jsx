import React from 'react'
import "./Header.css"
import MenuSharpIcon from '@material-ui/icons/MenuSharp';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import VideoCallSharpIcon from '@material-ui/icons/VideoCallSharp';
import AppsSharpIcon from '@material-ui/icons/AppsSharp';
import NotificationsSharpIcon from '@material-ui/icons/NotificationsSharp';
import { Avatar } from '@material-ui/core';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

        const [inputSearch,setInputSearch]= useState("");




    return (
        <div className="header">
            <div className="start">
               <MenuSharpIcon/>

                <Link to="/">
                 <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/300px-YouTube_Logo_2017.svg.png" alt="logo_img" className="logo" />
                </Link>

            </div>
            <div className="middle">
                <input 
                onChange={(e) => setInputSearch(e.target.value)} 
                value={inputSearch} 
                type="text" 
                placeholder="  search" 
                />

                 <Link to={`/search/${inputSearch}`}>
                    <div className="search">
                        <SearchSharpIcon fontSize="medium" />
                    </div>

                 </Link>                 
               
                
            </div>
            <div className="end">
                <VideoCallSharpIcon/>
                <AppsSharpIcon/>
                <NotificationsSharpIcon/>
                <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2_ADLnaz4XTSJNAsh2ihqggrjfqqWJo0nIA&usqp=CAU" className="avatar_logo"/>
            </div>
        </div>
      
    )
}

export default Header;