import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import VideocamIcon from '@mui/icons-material/Videocam';
import React from 'react';
import Input from './Input';
import Messages from './Messages';

function Chat() {
  return (
    <div className='chat'>
      <div className="chatinfo">
        <span>Jane</span>
        <div className="chaticons">
          <VideocamIcon/>
          <PersonAddIcon/>
          <MoreHorizIcon/>
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default Chat