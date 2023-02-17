import React, { useState } from 'react'
import Messages from './Messages';
import Input from './Input';

const Chat = () => {
    const [messages, setMessages] = useState([]);
  return (
    <>
      <div className='chat'>
        <div className='chatInfo'>
            <span>Ankit</span>
            <div className='chatIcons'>
                <img src='https://www.shutterstock.com/image-vector/photo-camera-vect
                or-icon-on-260nw-1674082414.jpg' className='chatIconsImg' alt=""/>

                <img src='https://cdn-icons-png.flaticon.com/512/6911/6911758.png' alt="" className='chatIconsImg'/>
                
                <img src='https://cdn-icons-png.flaticon.com/512/6488/6488591.png' alt="" className='chatIconsImg'/>
            </div>
        </div>
        <Messages messages={messages}/>
        <Input setMessages={setMessages} messages={messages} />
      </div>
    </>
  );
}

export default Chat
