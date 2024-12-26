import { createContext } from 'react'
import { ContactInterface } from '../common/interfaces/interfaces';

export const ContactsContext = createContext<ContactInterface[]>();
