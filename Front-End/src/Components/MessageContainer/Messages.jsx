import React from 'react'
import Message from './Message'
 import useGetMessage from '../../Hooks/useGetMessage'
import Skeleton from '../skeleton/Skeleton';

const Messages = () => {
  const{messages,loading}=useGetMessage();
  console.log(messages);
  return (
    <div className='px-4 flex-1 overflow-auto'>
      {
        loading && [...Array(3)].map((_,idx)=><Skeleton key={idx}/>)
      }
      { !loading && messages.length===0 && (
        <p className='text-center text-2xl'> Send Message to start the Conversation</p>
      )}
      {
        !loading && messages.length>0 && messages.map((mess)=>(
          <Message key={mess._id} message={mess} />
        ))
      }
    </div>
  )
}

export default Messages
