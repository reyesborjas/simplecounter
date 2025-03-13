import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaClock } from "react-icons/fa";

function SecondsCounter({ initialSeconds = 0, alertTime = null }) {
    const [seconds, setSeconds] = useState(initialSeconds);
    const [isRunning, setIsRunning] = useState(true);
    
    useEffect(() => {
        if (!isRunning) return;
        
        const interval = setInterval(() => {
            setSeconds(prev => {
                if (alertTime !== null && prev + 1 === alertTime) {
                    alert(`Time reached: ${alertTime} seconds!`);
                }
                return prev + 1;
            });
        }, 1000);
        
        return () => clearInterval(interval);
    }, [isRunning, alertTime]);
    
    const handleStop = () => setIsRunning(false);
    const handleResume = () => setIsRunning(true);
    const handleReset = () => {
        setIsRunning(false);
        setSeconds(initialSeconds);
    };

    return (
        <div className="text-center p-4">
            <h1><FaClock /> {String(seconds).padStart(6, '0')}</h1>
            <button className="btn btn-danger m-2" onClick={handleStop}>Stop</button>
            <button className="btn btn-success m-2" onClick={handleResume}>Resume</button>
            <button className="btn btn-warning m-2" onClick={handleReset}>Reset</button>
        </div>
    );
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<SecondsCounter initialSeconds={0} alertTime={10} />);

export default SecondsCounter;
