import React from 'react'

export default function HandlingEvents(){
    function handleClick(event){
        event.preventDefault()
        try{
            alert(`Thanks for clicking. This is an event handler.`)
        } catch(error){
            console.log(error)
        }
    }
    return <h2><a href="null" onClick={handleClick}>{`Handling Events - Click Here`}</a></h2>
}