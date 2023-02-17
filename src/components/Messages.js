import React from 'react'
import Message from './Message'

const Messages = ({messages}) => {
  return (
    <>
        <div className="messages">
            <Message messages={messages}/>
        </div> 
    </>
  )
}

export default Messages
