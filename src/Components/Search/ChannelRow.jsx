import { Avatar } from '@material-ui/core'
import React from 'react';
import VerifiedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
import './ChannelRow.css'

const ChannelRow = ({image,channel,verified,subs,noOfVideos,description}) => {
    return (
        <div className="ChannelRow">
            <Avatar className="ChannelRow_logo" alt={channel} src={image}/>   
            <div className="ChannelRow_text">
                <h4>{channel} {verified && <VerifiedIcon/>}</h4>
                <p>{subs} Subscribers . {noOfVideos} Videos</p>
                <p>{description}</p>
            </div>         
        </div>
    )
}

export default ChannelRow;