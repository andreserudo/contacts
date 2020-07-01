import React, { useState} from 'react';
import styled from 'styled-components';
import CONTACTS from '../contacts';
import ContactItem from '../components/ContactItem';
import AddComponentForm from '../components/AddComponentForm';
import Contact from '../models/Contact';

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const Card = styled.div`
  width: 768px;
  height: 70%;
  background-color: #eee;
  box-shadow: 0 0 10px rgba(0,0,0, 0.25);
  overflow-y: auto;
`;

const ContactList = styled.div` 
  list-style: none;
`;

const Contacts = () => {
  const [isAddinContact, setIsAddinContact] = useState(false);
  const [contacts, setContacts] = useState(CONTACTS);

  const handleRemove = (removeContactId: string) => {
    alert('oi');
    setContacts(contacts => 
      contacts.filter(contact => contact.id !== removeContactId)
    );
  }

  const handleAddContact = (contact: Contact) => {
    setContacts((contacts) => contacts.concat(contact));
    setIsAddinContact(false);
  }

  return (
    <Wrapper>
      <Card>
        <header>
          {
            isAddinContact && (
              <AddComponentForm onAddContact={handleAddContact}/>
            )
          }
          <button onClick={() => setIsAddinContact(true)}>Adicionar Contato:</button>
        </header>
        <ContactList>
          {
            contacts.map(contact => (
              <ContactItem  
                key={contact.id} 
                contact={contact}  
                onRemoveContact={handleRemove}
              />
            ))
          }
        </ContactList>
      </Card>
    </Wrapper>
  );
}

export default Contacts;