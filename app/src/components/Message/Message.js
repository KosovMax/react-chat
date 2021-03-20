// import React from 'react'
import './Message.css'

const Message = ({ item, currentUser }) => {
  const classMessage =
    item.user === currentUser ? 'alert alert-primary' : 'alert alert-dark'

  return (
    <div>
      <div className="message-container">
        <span className={classMessage}>
          {item.user}: {item.text}
        </span>
      </div>
    </div>
  )
}

export default Message
