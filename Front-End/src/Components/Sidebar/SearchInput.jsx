import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
function SearchInput() {
  return (
    <form className='flex items-center gap-2'>
        <input type="text" placeholder='search...' className='input input-bordered rounded-full m-2' />
        <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
            <SearchIcon className='w-6 h-6' />
        </button>
    </form>
  )
}

export default SearchInput
