import { TuneOutlinedIcon } from '@material-ui/icons/TuneOutlined';
import React from 'react';
import './Search.css';
import VideoRow from './VideoRow';
import ChannelRow from './ChannelRow';

const SearchPage = () => {
    return (
        <div className='SearchPage'>
            <div className="filter_icon">
                {/* <TuneOutlinedIcon/> */}
                <h2>filter</h2>
            </div>
            <hr />
            <ChannelRow
            image="https://www.studentproblems.com/wp-content/uploads/2018/11/loki-768x768.jpg"
            channel="LOKI : THE GOD"
            verified
            subs="122M"
            noOfVideos="200"
            description="The mercurial villain Loki resumes his role as the God of Mischief in a new series that takes place after the events of “Avengers: Endgame.”"
            />
            <hr />

            <VideoRow 
            views="1.4k" 
            subs="22k" 
            description="bla bla bla"
            timestamp= "59 seconds ago"
            channel="15x "
            title="Lets built"
            image="http://pngimg.com/uploads/pokemon/pokemon_PNG148.png"/>  
            <VideoRow 
            views="14k" 
            subs="220k" 
            description="YouTube Ranking: Advanced YouTube Thumbnail Tips"
            timestamp= "45 hours ago"
            channel="15x.net"
            title="Justin Brown"
            image="https://i.ytimg.com/vi/T54LOlTFDD0/hqdefault.jpg"/>
            <VideoRow 
            views="14k" 
            subs="220k" 
            description="YouTube Ranking: Advanced YouTube Thumbnail Tips"
            timestamp= "45 hours ago"
            channel="15x.net"
            title="Justin Brown"
            image="https://i.ytimg.com/vi/T54LOlTFDD0/hqdefault.jpg"/>
            <VideoRow 
            views="14k" 
            subs="220k" 
            description="YouTube Ranking: Advanced YouTube Thumbnail Tips"
            timestamp= "45 hours ago"
            channel="15x.net"
            title="Justin Brown"
            image="https://i.ytimg.com/vi/T54LOlTFDD0/hqdefault.jpg"/>

        </div>
    )
}

export default SearchPage;