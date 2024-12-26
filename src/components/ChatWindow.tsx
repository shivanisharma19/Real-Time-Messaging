import React from "react"
import { addMessage, deleteMessage } from "../store/messageStorage"
import useMessagesFilterAndSort from "../common/hooks/useMessagesFilterAndSort";
import '../styles/chatWindow.css'

const ChatWindow = ({contact}) => {
    const contactId = contact.id
    const sortedMessages = useMessagesFilterAndSort({contactId})

    const onDelete = (msgId: string) => {
      deleteMessage(msgId)
    }

  console.log(sortedMessages)

    return (
         <div>
          <header className="contact-details">
            <h3> {contact.contactName} </h3>
            <h5> {contactId}</h5>
          </header>
          <div className="chat-messages">
            {Object.values(sortedMessages)?.map((message: any) => (
           <div  className="chat-messages__item" key={message?.id}>{message?.text}
           <svg className="chat-messages__delete-icon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15" height="15" viewBox="0 0 24 24" fill="#ffffff">
              <path d="M 10.806641 2 C 10.289641 2 9.7956875 2.2043125 9.4296875 2.5703125 L 9 3 L 4 3 A 1.0001 1.0001 0 1 0 4 5 L 20 5 A 1.0001 1.0001 0 1 0 20 3 L 15 3 L 14.570312 2.5703125 C 14.205312 2.2043125 13.710359 2 13.193359 2 L 10.806641 2 z M 4.3652344 7 L 5.8925781 20.263672 C 6.0245781 21.253672 6.877 22 7.875 22 L 16.123047 22 C 17.121047 22 17.974422 21.254859 18.107422 20.255859 L 19.634766 7 L 4.3652344 7 z" onClick={() => onDelete(message.id)} />
            </svg>
           </div>
         ))}
        </div>
         <form
           className="messageBox"
           onSubmit={(e: any) => {
             e.preventDefault();
             if(e.target[0].value === '') 
               return null
             else {
              addMessage(contactId, e.target[0].value);
              e.target[0].value = '';
             }
           }}
         >
           <input placeholder={`Message ${contact.contactName}`} type="text" />
           <button type="submit">Send</button>
         </form>
       </div>
     )
}

export default ChatWindow