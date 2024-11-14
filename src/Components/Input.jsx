import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import React from 'react';

function Input() {
  return (
    <div className='input'>
      <input type='' placeholder='Type Somthing....'/>
      <div className="send">
        <AttachFileIcon  className='link'/>
        <input type="file" style={{display:'none',}} id='file' />
        <label htmlFor="file">
          <AddPhotoAlternateIcon  className='add' style={{margin:'10px',position:'relative',top:'8px'}}/>
          <button style={{position:'relative',top:'-7px'}}>Send</button>
        </label>
      </div>
    </div>
  )
}

export default Input