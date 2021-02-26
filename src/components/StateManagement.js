import React, {useState} from 'react'

export default function StateManagement(){
    const [myTime, setMyTime]= useState(0)
    setInterval(() => {
        setMyTime(Date.now)
    }, 1000)
    return <h2>{`State Management - Time now: ${myTime}`}</h2>
}