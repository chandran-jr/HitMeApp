import { Avatar, IconButton} from '@material-ui/core';
import { AttachFile, InsertEmoticon, SearchOutlined, Mic } from '@material-ui/icons';
import MoreVert from '@material-ui/icons/MoreVert';
import React, { useState, useEffect } from 'react';
import './Chat.css';

function Chat() {

    const [seed,setSeed] = useState("");

    useEffect(() => {

        setSeed(Math.floor(Math.random() * 5000));
    
    },[]);

    return (
        <div className="chat">

        <div className="chat__header">

        <Avatar src= {`https://avatars.dicebear.com/api/human/${seed}.svg`}/>

        <div className="chat__headerInfo">

            <h3>Room name</h3>
            <p>last seen an hr ago</p>

        </div>

        <div className="chat__headerRight">

            <IconButton>
                <SearchOutlined/>
            </IconButton>

            <IconButton>
            <AttachFile/>
            </IconButton>

            <IconButton>
                <MoreVert/>
            </IconButton>

        </div>

        </div>


        <div className="chat__body">

            <p className="chat__message">
               <span className="chat__name">Govind</span>
                Hey guys
                <span className="chat__timestamp">2:19pm</span>
            </p>

            <p className={`chat__message ${true && "chat__receiver"}`}>
                <span className="chat__name">Govind</span>
                Howsit goin'
                <span className="chat__timestamp">2:20pm</span>
            </p>

        </div>


        <div className="chat__footer">

       <InsertEmoticon/>

       <form>
           <input type="text" placeholder="Type your message..." />
           <button>Send a message</button>
       </form>
       
       <Mic/>


        </div>

            
        </div>
    )
}

export default Chat