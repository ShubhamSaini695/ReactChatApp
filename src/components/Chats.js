import React from 'react'

const Chats = () => {
  return (
    <>
        <div className='chats'>
            <div className='userChat'>
                <img alt='' src='https://image.shutterstock.com/image-photo/young-handsome-man-beard-wearing-260nw-1768126784.jpg' /> 
                <div className='userChatInfo'>
                    <span className='userChatInfoSpan'>Sanchit</span>
                    <p className='userChatInfoP'>Hello</p>
                </div>
            </div>

            <div className='userChat'>
                <img alt='' src='https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg' /> 
                <div className='userChatInfo'>
                    <span className='userChatInfoSpan'>Tarun</span>
                    <p className='userChatInfoP'>Hello</p>
                </div>
            </div>

            <div className='userChat'>
                <img alt='' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKe-jJp24quanLqDDweKPPVD-4BHVAlpWLyQ&usqp=CAU' /> 
                <div className='userChatInfo'>
                    <span className='userChatInfoSpan'>Anshul</span>
                    <p className='userChatInfoP'>Hello</p>
                </div>
            </div>

        </div>
    </>
  )
}

export default Chats
