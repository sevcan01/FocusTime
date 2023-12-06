import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import TimerToggleButton from './TimerToggleButton';
import TimmerModeDisplay from './TimmerModeDisplay';
import TimerDownDisplay from './TimerDownDisplay';
import { useEffect, useState } from 'react';
import { TimerModes } from './type';

const FOCUS_TIME_MIN=0.2*60*1000;
const BREAK_TIME_MIN=0.1*60*1000;
export default function App() {
  const [timerMode, setTimerMode] = useState<TimerModes>('Focus');
  const [timerCount, setTimerCount] = useState<number>(FOCUS_TIME_MIN);
  const [timerInterval, setTimerInterval] = useState<NodeJS.Timeout | number | null>(null);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
   useEffect(()=>{
  if(timerCount===0){
  if(timerMode==='Focus'){
  setTimerMode('Break');
  setTimerCount(BREAK_TIME_MIN);
  }else{
    setTimerMode('Focus')
    setTimerCount(FOCUS_TIME_MIN);
  }
  stopTimer()
  }
  },[timerCount])

  const startTimer =()=>{
    setIsTimerRunning(true)
  const id = setInterval(()=>setTimerCount((prev)=>prev-1000),1000)
  setTimerInterval(id)
  }
  const stopTimer =()=>{
    setIsTimerRunning(false)
  clearInterval(timerInterval)
  }
  const timerDate= new Date(timerCount)
  return (
    <View style={[styles.container,{backgroundColor:timerMode==='Break'?'#2a9d8f':'#d95550'}]}>
     
      <StatusBar style="auto" />
      <TimmerModeDisplay timerMode={timerMode}/>
 <TimerToggleButton stopTimer={stopTimer} startTimer={startTimer} isTimerRunning={isTimerRunning}/>
     <TimerDownDisplay timerDate={timerDate} />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
