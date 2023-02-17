import React from 'react'

const Search = () => {
  return (
    <>
      <div className='search'>
        <div className='searchForm'>
            <input type="text" id='searchFormInput' placeholder='Find Your Friend'/>
        </div>
        <div className='userChat'>
            <img alt='' src='https://cdn.pixabay.com/photo/2017/07/18/23/23/user-2517433_960_720.png' /> 
            <div className='userChatInfo'>
                <span className='userChatInfoSpan'>Ankit</span>
                <p className='userChatInfoP'>Hello</p>
            </div>
        </div>
      </div>
    </>
  )
}

export default Search
