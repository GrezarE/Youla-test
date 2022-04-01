import './App.css';
import { useRef, useState } from 'react';
import { ClockPicker } from '@mui/lab';
// 
import { Button } from '@mui/material';


function App() {
  const [timer, setTimer] = useState(0)
  const [isActive, setIsActive] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const timerRef = useRef()

  const start = () => {
    setIsActive(true)
    setIsPaused(false)
    timerRef.current = setInterval(() => {
      setTimer((timer) => timer + 1)
    }, 1000)
  }

  const pause = () => {
    clearInterval(timerRef.current)
    setIsPaused(true)
  }

  const resume = () => {
    setIsPaused(false)
    timerRef.current = setInterval(() => {
      setTimer((timer) => timer + 1)
    }, 1000)
  }

  const stop = () => {
    setIsPaused(false)
    setIsActive(false)
    clearInterval(timerRef.current)
    setTimer(0)
  }

  const formatTime = () => {
    const getSeconds = `0${(timer % 60)}`.slice(-2)
    const minutes = `${Math.floor(timer / 60)}`
    const getMinutes = `0${minutes % 60}`.slice(-2)
    const getHours = `0${Math.floor(timer / 3600)}`.slice(-2)
    return `${getHours} : ${getMinutes} : ${getSeconds}`
  }

  return (
    <div className="App">
      <div className='timer'>
        <h1 className='header'>Таймер</h1>
        <p className='clock'>{formatTime()}</p>
        <div className='buttons'>
          {!isActive ? (<Button onClick={start}>Start</Button>) : (<Button onClick={stop}>Stop</Button>)}
          {!isPaused ? (<Button onClick={pause}>Pause</Button>) : (<Button onClick={resume}>Resume</Button>)}
        </div>
      </div>
    </div>
  );
}

export default App;
