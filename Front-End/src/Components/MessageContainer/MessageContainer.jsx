import React from 'react'

const MessageContainer = () => {
  return (
    <div className=' md:min-w-[450px] flex flex-col'>
        <>
        {/* header */}
        <div>
            <span className=' label-text'>To:</span>
            <span className='text-gray-900 font-bold'>John Doe</span>

        </div>
        <Message/>
        <MessageInput/>
        </>
      
    </div>
  )
}

export default MessageContainer
