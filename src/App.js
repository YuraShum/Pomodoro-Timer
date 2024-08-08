import { useEffect, useRef, useState } from "react";
import Main from "./components/Main";
import Settings from "./components/Settings";
import music from './timer_music.mp3'



function App() {
  const [isStarting, setIsStarting] = useState(false);
  const [sessionLength, setSessionLength] = useState(25);
  const [breakLength, setBreakLength] = useState(5);
  
  const [session, setSession] = useState(true);
  const [timeInSeconds, setTimeInSeconds] = useState(session ? (sessionLength * 60) : (breakLength  * 60));
  const timeInterval = useRef();

  useEffect(() => {
    setTimeInSeconds(session ? (sessionLength * 60) : (breakLength  * 60))
  }, [sessionLength, breakLength])

  useEffect(() => {
    setTimeInSeconds(session ? (sessionLength * 60) : (breakLength  * 60))
  },[session])

  function countTimeToEnd(){
    if(timeInSeconds === 1){
      setTimeInSeconds(prevValue => prevValue - 1)
      console.log(timeInSeconds)
      if(isStarting){
        playMusic();
      }
      clearInterval(timeInterval.current)
      console.log('clear')
      
    }else if(isStarting && timeInSeconds){
      setTimeInSeconds(prevValue => prevValue - 1)
      console.log(timeInSeconds)
      
    }

  }

  function playMusic(){
    let audio = new Audio(music);
    audio.play()
  }

  useEffect(() => {
    timeInterval.current = setInterval(countTimeToEnd, 1000);
    return () => clearInterval(timeInterval.current);

  })

  let styles = {
    backgroundColor: session ? 'rgba(249, 13, 72, 0.884)': 'rgba(13, 147, 249, 0.884)'
  } 



  return (
    <div className="App" style={styles}>
      <Main 
        isStarting = {isStarting} 
        setIsStarting = {setIsStarting} 
        time ={timeInSeconds} 
        setSession = {setSession} 
        session = {session} 
        breakLength = {breakLength}/>
      <footer className="footer">
        <Settings 
          name = 'Session'  
          time = {sessionLength} 
          changeTime = {setSessionLength}/>
        <Settings 
          name = 'Break' 
          time = {breakLength} 
          changeTime ={setBreakLength}/>
      </footer>
    </div>
  );
}

export default App;
