import React, {useEffect, useState} from 'react'
import './App.css';
import ContactList from './components/ContactList'
import ChatWindow from './components/ChatWindow'
import { ContactInterface } from './common/interfaces/interfaces'

const App = () => {
  const [contact, setContact] = useState()<ContactInterface>

  useEffect(() => {
   document.title = `WhatsApp Web Copy`;
}, []); 
  
  return (
    <>
     <header className="app__header">
        <h2>Chats</h2>
     </header>
     <div className="app__container">
     <section className='contactList-container'>
      <ContactList setContact={setContact}/>
     </section>
     <section className='chatWindow-container'>
      { contact?.id ? 
          (<ChatWindow contact={contact} />)
       :  (<p className= 'chatWindow-home'> Welcome !</p>)
      }
      </section>
     </div>
     </>
    )
}
export default App;
