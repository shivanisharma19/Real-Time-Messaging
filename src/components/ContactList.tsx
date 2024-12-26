import React, { useContext }  from 'react'
import '../styles/contactList.css'
import { ContactsContext } from '../store/contactStore'

const ContactList = ({ setContact }) => {

    const contacts = useContext(ContactsContext)
    
    return contacts.map((c) => (
                <div key={c.id} className='contact-items' onClick={() => setContact(c)}>
                    {c.contactName}
                </div>
            ))
}

export default ContactList
