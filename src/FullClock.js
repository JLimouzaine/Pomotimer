import Countdown, {zeroPad} from "react-countdown"
import { useRef, useState } from "react";

// 1500000 = 25mins

const Rest = () => {
    return <h2>Time to rest!</h2>
}

const FullClock = () => {
    const clockRef = useRef();
    const [running, setRunning] = useState(true)
    // Referencing start and pause fncts
    const handleStart = () => {
        clockRef.current.start();
        setRunning(!running)
        console.log(running);
    }
    const handlePause = () => {
        clockRef.current.pause()
        setRunning(!running)
        console.log(running);

    }
    //Renderer controls minutes seconds, how they look and behave
    const renderer = ({minutes, seconds, completed}) => {
        // if completed say "time to rest" or smt like that
        if (completed) {
            return <Rest/>
        } //else, return timer
        return <span>{zeroPad(minutes)}:{zeroPad(seconds)}</span>;
    }

    return (
        <div>
        <Countdown 
            ref={clockRef}
            renderer ={renderer}
            autoStart={false}
            date={Date.now() + 5000}/>
        {running && <button onClick={handleStart}>Start</button>}
        {!running && <button onClick={handlePause}>Pause</button>}
        </div>
    )
}

export default FullClock
