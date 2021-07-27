import React from 'react';
import './Slider.css';
import './SliderRow'


 const Slider = ({selected, Icon ,title }) => {
    return (
        <div className="Slider">
            <div className={`button  ${selected && 'selected'}`}>
                <Icon className={`focus`}/>
                <h3>{title}</h3>
            </div>
        </div>

    )
}
export default Slider;

// <div className="button">
// <WhatshotIcon className="focus"/>
// <h3>Trending</h3>
// </div>
// <div className="button">
// <SubscriptionsIcon className="focus"/>
// <h3>Subscriptions</h3>
// </div>