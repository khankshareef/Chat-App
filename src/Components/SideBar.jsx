import React from 'react'
import Chats from './Chats'
import Navnar from './Navbar'
import SearchBar from './SearchBar'

function SideBar() {
  return (
    <div className='sidebar'>
        <Navnar/>
        <SearchBar/>
        <Chats/>
    </div>
  )
}

export default SideBar