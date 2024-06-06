"use client"
import React from 'react'
import ReactPlayer from 'react-player'

const AcademyVideo = () => {
  return (
    <ReactPlayer
        width="900px"
        height="500px"
        url={"https://youtu.be/UbtB4sMaaNM?si=M4u2wo7aErPSyEkM"}
        controls={true}
        // light is usefull incase of dark mode
        light={false}
        // picture in picture
        pip={true}
        
        />
  )
}

export default AcademyVideo