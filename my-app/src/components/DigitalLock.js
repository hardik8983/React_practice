import React, { useState } from 'react';

const DigitalCLock = () => {
    let time = new Date().toLocaleTimeString();
    
    const [cTime, SetCTime] = useState(time);
    const UpDateTime = () => {
        time = new Date().toLocaleTimeString();
        SetCTime(time);
    }
    setInterval(UpDateTime, 1000);
    return (
        <h1>
            Digital Clock <br /> <br />
            {cTime}
        </h1>
    )
}
export default DigitalCLock;