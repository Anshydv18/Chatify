import React from 'react'
import SendIcon from '@mui/icons-material/Send';
const MessageInput = () => {
  return (
    <form className='px-4 my-3'>
        <div className='w-full flex items-center'>
            <input type='text'
            className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white'
            placeholder='Type a message...'
            />
            <SendIcon className=''/>
        </div>
    </form>
  )
}

export default MessageInput
