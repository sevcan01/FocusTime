import { View, Text, Button, TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'
import {FontAwesome} from '@expo/vector-icons';
interface TimerToggleButtonProps{
    stopTimer: () => void;
    startTimer: () => void;
    isTimerRunning: boolean;
}
const TimerToggleButton = ({stopTimer,startTimer,isTimerRunning,}:TimerToggleButtonProps) => {
const toggleTimmer=()=>{
isTimerRunning ? stopTimer(): startTimer()
}
  return (
<TouchableOpacity onPress={toggleTimmer}>
    <View style={styles.container}>
        <FontAwesome style={styles.icon} name={isTimerRunning?'pause': 'play'} size={125} color={'#fff'}/>
    </View>
</TouchableOpacity>



  )
}

export default TimerToggleButton

const styles=StyleSheet.create({
  container: {

borderWidth:5,
borderColor:'#fff',
borderRadius:125,
width:250,
height:250,
alignItems:'center',
justifyContent:'center',
marginVertical:50,
},
icon:{
alignSelf:'center',
}
})

