import React, { useState,useRef } from 'react';

export const Timer= ()=>{
    const [seconds, setseconds] = useState(0)
    const [minutes, setminutes] = useState(0)
    const timeout=useRef(null)
   
    // const restart = () => {
    //     console.log(timeout)
    //     clearTimeout(timeout.current)
    //     setminutes(0)
    //     setseconds(0)
    // }
    /*timeout.current=*/setTimeout(() => {

        if(seconds===59){
            setseconds(0)
            setminutes(minutes + 1)
        }
        else setseconds(seconds + 1)

    }, 1000)

    return (
        <div style={{ margin: '10%' }}>
            <h1> The timer is:</h1> 
            <h2> {minutes}:{seconds}</h2>
            <br />
            {/* <button onClick={restart}>restart</button> */}
        </div>
    )
}
