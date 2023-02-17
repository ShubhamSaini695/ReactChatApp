import React from 'react'
// import Input from './Input';

const Message = ({messages}) => {
    
  return (
    <> 
    
    {messages.map((messages,index) => (
        <div className='message owner' key={index}> 
        <div className='messageInfo'>
        <img className='messageInfoImg' alt="" src='https://encrypted-tbn0.gstatic.com/
        images?q=tbn:ANd9GcTii3x-mK3Ist4_9Hoz5kJRL5U0hEpPducYxHl3euNfs2XdX6GPtrKLtRGf7OzyXIJaBSo&usqp=CAU' />
        <span style={{color: "lightslategrey"}}>just now</span>
        </div>
    
        




    <div className='messageContent' >
        <p className='messageContentPara'>{messages}</p>
        </div>

        </div>
    ))} 
    </>

  )
}

export default Message
