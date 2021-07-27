import { Avatar } from '@material-ui/core'
import React from 'react'
import './Recommended.css'

export const Recommend = ({src,alt,heading,channelname,channel_img,likes,time}) => {
    return (
        <div className="cart">
            <img src={src} alt={alt} className="image"/>
            
            <div className="bottom">
                <Avatar src={channel_img} className="avatar" alt={alt}/>
                <div className="time">
                <h1 className="heading">{heading}</h1>
                <div className="color_Class">
                    <h5>{channelname}</h5>
                    <div className="likes">
                        <h5>{likes}</h5>
                        <h5 className="bullet"> .</h5>
                        <h5>{time}</h5>
                    </div>
                </div>
                  
                   
                </div>
            </div>

        </div>
    )
}
