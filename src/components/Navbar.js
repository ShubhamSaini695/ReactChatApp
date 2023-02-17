// import React from 'react'

import React from 'react'

const Navbar = () => {
    
  return (
    <>
    <div className='navbar'>
        <span className='logoName'>Chat</span>
        <div className='user'>
            <span className='userSpan'></span>
            <img alt='' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTii3x-mK3Ist4_9Hoz5kJRL5U0hEpPducYxHl3euNfs2XdX6GPtrKLtRGf7OzyXIJaBSo&usqp=CAU' className='userImage'/>
            <button>Log Out</button>
        </div>
    </div>
    </>
  );
}

export default Navbar