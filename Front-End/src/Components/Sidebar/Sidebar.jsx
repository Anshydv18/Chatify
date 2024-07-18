import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogoutIcon from '@mui/icons-material/Logout';

function Sidebar() {
  return (
    <div className=' relative'>
      <SearchInput/>
      <div className='divider px-3'></div>
      {/* divider for spacing in the contact vs chat */}
      <Conversations/>
     <LogoutIcon className=' absolute  left-1 bottom-1 text-white h-16 mx-2 mb-2 cursor-pointer'/>

    </div>
  )
}

export default Sidebar
