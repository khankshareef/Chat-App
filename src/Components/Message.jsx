import React from 'react'


function Message() {
  return (
    <div className='message owner'>
      <div className="messageinfo">
        <img src='https://images.pexels.com/photos/28668443/pexels-photo-28668443/free-photo-of-contemplative-portrait-with-red-suitcase-and-hat.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'/>
      <span>Just Now</span>
      </div>
      <div className="messagecontent">
        <p>Hello</p>
        <img src='https://images.pexels.com/photos/28668443/pexels-photo-28668443/free-photo-of-contemplative-portrait-with-red-suitcase-and-hat.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'/>
      </div>
    </div>
  )
}

export default Message