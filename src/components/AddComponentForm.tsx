import React, { useState, FormEvent } from 'react';
import {uuid} from 'uuidv4';
import Contact from '../models/Contact';

type Props = {
  onAddContact : (contact: Contact) => void;
}

const AddComponentForm = ({onAddContact}: Props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (event : FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onAddContact({
      id : uuid(),
      email, 
      name, 
      phoneNumber}
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="input-name">Nome</label> 
        <input 
          id="input-name"
          type="text"
          value={name}
          onChange={ event => setName(event.target.value)}
        />
      </div>

      <div>
      <label htmlFor="input-email">Email</label> 
        <input 
          id="input-email"
          type="email"          
          value={email}
          onChange={ event => setEmail(event.target.value)}
        />
      </div>

      <div>
      <label htmlFor="input-phoneNumber">Phone</label> 
        <input 
          id="input-phoneNumber"
          type="number"          
          value={phoneNumber}
          onChange={ event => setPhoneNumber(event.target.value)}
        />
      </div>

      <button type="submit">Criar Contato</button>
    </form>
  );
}

export default AddComponentForm;