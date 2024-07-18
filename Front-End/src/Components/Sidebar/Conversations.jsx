import React from 'react'
import Conversation from './Conversation'

function Conversations() {
  return (
    <div className=' px-2 py-2 flex flex-col overflow-auto'>
      <Conversation/>
      <Conversation/>
      <Conversation/>
    </div>
  )
}

export default Conversations
