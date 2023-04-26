import React, { useState } from 'react';
import './NameInput.css';

export default function NameInput() {
  const [name, setName] = useState('');
  const [displayName, setDisplayName] = useState('****');

  const handleSubmit = (event) => {
    event.preventDefault();
    setDisplayName(name);
    setName('');
  }

  const handleChange = (event) => {
    setName(event.target.value);
  }

  return (
    <div className="name-input">
      <h1 className="display-name">Hello, {displayName}!</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name-input">Anurag sharma:</label>
        <input type="text" id="name-input" value={name} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}