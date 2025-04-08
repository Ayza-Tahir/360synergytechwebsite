import "./Event011.css";

import React from 'react'
import event1 from "./../../../Assets/event1.png";
import event2 from "./../../../Assets/event2.png";
import event3 from "./../../../Assets/event3.png";
import event4 from "./../../../Assets/event4.png";
import event5 from "./../../../Assets/event5.png";
import event6 from "./../../../Assets/event6.png";
import event7 from "./../../../Assets/event7.png";
import event8 from "./../../../Assets/event8.png";
import event9 from "./../../../Assets/event9.png";

function Event011() {
  return (
    <div className="event-layout1">
      <div className="event-layout2">
        <p className="event-content1">Culture</p>
      </div>
      <div className="event-layout3">
        <p className="event-content2">Our Event Gallary</p>
      </div>
      <div className="event-layout4"></div>

      <div className="event-layout5">
        <div className="event-layout6">
          <img src={event7} className="event-layout7" alt="Background" />
        </div>
        <div className="event-layout6">
          <img src={event6} className="event-layout7" alt="Background" />
        </div>
        <div className="event-layout6">
          <img src={event3} className="event-layout7" alt="Background" />
        </div>
        <div className="event-layout6">
          <img src={event4} className="event-layout7" alt="Background" />
        </div>
        <div className="event-layout6">
          <img src={event8} className="event-layout7" alt="Background" />
        </div>
        <div className="event-layout6">
          <img src={event1} className="event-layout7" alt="Background" />
        </div>
        <div className="event-layout6">
          <img src={event5} className="event-layout7" alt="Background" />
        </div>
        <div className="event-layout6">
          <img src={event2} className="event-layout7" alt="Background" />
        </div>
        <div className="event-layout6">
          <img src={event9} className="event-layout7" alt="Background" />
        </div>
      </div>
    </div>
  );
}

export default Event011
