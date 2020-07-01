import React from 'react';
import Contact from '../models/Contact';
import styled from 'styled-components';

type Props = {
  contact: Contact;
  onRemoveContact: (id: string) => void;
};

const Card = styled.div`
  padding: 10px;
  border-radius: 20px;
  background-color: #ccc;

  & + &{
    margin-top: 10px;
  }
`;

const ContactItem = ({ contact, onRemoveContact }: Props) => (
  
    <Card>
      <p>Nome: { contact.name}</p>
      <p>Email: { contact.email}</p>
      <p>Telefone: { contact.phoneNumber}</p>
      <button onClick={() => onRemoveContact(contact.id)}>
        Excluir
      </button>
    </Card>
  
);

export default ContactItem;