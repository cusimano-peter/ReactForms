import React, { useState } from 'react';

function Authenticate({ token }) {
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  async function handleClick() {
    try {
      const response = await fetch('https://fsa-jwt-practice.herokuapp.com/authenticate', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });
  
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Failed to authenticate');
      }
  
      setSuccessMessage(data.message);
    } catch (error) {
      setError(error.message);
    }
  }
  

  return (
    <div>
      <h2>Authenticate</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      <button onClick={handleClick}>Authenticate Token</button>
    </div>
  );
}
