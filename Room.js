//import state and model from node library
import React,{useEffect,useState} from "react";
import video from "twilio-video";
import Participant from "./Participant"
const Room=({roomName,token,handleLogout})=>{
    const[room,setRoom]=useState(null);
    const[participants,setParticipants]=useState([]);
}
//if already connected participants
useEffect(()=>{
                 const participantConnected=(participant)=>{
                    setParticipants((prevParticipants)=>[...prevParticipants,participant]);
                }
            });
            //check which participant are connected to stress
let participantConnected=(participants)=>{
    setParticipants((prevParticipants)=>{
        prevParticipants.filter((p)=>p!==participants)
    
    ;}
    );}
Video.connect(token,{name:roomName}).then((room)=>{setRoom(room);
room.on("participantConnected",participantConnected);
room.on("participantDisconnected",participantDisconnected);
room.participant.forEach(participantConnected)
});

