import React from 'react'

import  HomeIcon  from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import QueuePlayNextIcon from '@material-ui/icons/QueuePlayNext';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import  Slider from './Slider';
import './Slider.css'


const SliderRow = () => {
    return (
        <div className="Slider">
            <Slider selected title="Home" Icon={HomeIcon}/>
            <Slider title="Trending" Icon={ WhatshotIcon}/>
            <Slider title="Subscriptions" Icon={SubscriptionsIcon}/>
            <div className="gap"> </div>
            <hr />
            <div className="gap"></div>
            <Slider title="Library" Icon={VideoLibraryIcon}/>
            <Slider title="History" Icon={ HistoryIcon}/>
            <Slider title="Your Videos" Icon={QueuePlayNextIcon}/>
            <Slider title="Watch later" Icon={WatchLaterIcon}/>
            <Slider title="Liked Videos" Icon={ThumbUpAltIcon}/>
            <hr />
        </div>
    )
}

export default SliderRow;