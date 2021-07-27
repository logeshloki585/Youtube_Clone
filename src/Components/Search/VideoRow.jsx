import React from 'react';
import './VideoRow.css'

function VideoRow({views,subs , description,timestamp,channel,title,image}) {
    return (
        <div className="VideoRow">
            <img src={image} alt={channel} />
            <div className="VideoRow_text">
                <h2>{title}</h2>
                <p className="VideoRow_headline">
                    {channel} . <span className="VideoRow_subs">
                            <span className="VideoRow_subNumber"> {subs} </span>subscribers
                    </span>
                     {views} . {timestamp}
                </p>
                <p className="VideoRow_description">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default VideoRow;