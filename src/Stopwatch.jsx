import React,{useState,useEffect} from 'react'

function Stopwatch() {
    const [isRunning , setIsRunning] = useState(false)
    const[time, setTime] = useState(0)
    useEffect(()=>{
        let interval
        if(isRunning){
            interval =setInterval(()=>{
                setTime((prevTime)=>prevTime + 1)
            },1000)
        } else {
            clearInterval(interval)
        }
        return ()=> clearInterval(interval)
    },[isRunning])
    const handleStartStop = ()=>{
        setIsRunning(!isRunning)
    }
    const handleReset = () =>{
        setTime(0)
        setIsRunning(false)
    }
    const formatTime = (time) => {
        const minutes = Math.floor(time/60)
        const seconds =time % 60
        return `${minutes}:${seconds < 10 ? "0":""}${seconds}`
    }
  return (
    <div>
      <h1>Stopwatch</h1>
      <h1>Time : {formatTime(time)}</h1>
      <button onClick={handleStartStop}>{isRunning ? "Stop" : "Start"}</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default Stopwatch
