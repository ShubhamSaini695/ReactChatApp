import React,{useState} from 'react'

// import Message from './Message';

const Input = ({messages,setMessages}) => {
    const [message, setMessage] = useState('');

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    }

    const handleSendMessage = () => {
        if (message.trim() === '') return;
    setMessages([...messages, message]);
    // <Message message={message} />
    setMessage('');
    
    }
    
  return (
    <> 
    <div className='input'>
      <input type="text" placeholder='Type your message....' value={message} onChange={handleMessageChange} className='inputInput'/>
      <div className='send'>
      <img className='inputImage' alt="" src='data:image/png;base64,
      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' />
        
        <button className='inputBtn' onClick={handleSendMessage}>Send</button>
      </div>
    </div>
    </>
  )
}

export default Input






