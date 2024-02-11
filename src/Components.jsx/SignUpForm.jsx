import React, { useState } from 'react';

function SignUpForm({setToken}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch('https://fsa-jwt-practice.herokuapp.com/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to sign up');
      }
      setToken(result.token);
    } catch (error) {
      setError(error.message);
    }
  }
}

return (
    <div className="form-container">
      <h2>Sign Up!</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit} className="form">
        <div className="form-field">
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="form-input"
            />
          </label>
        </div>
        <div className="form-field">
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-input"
            />
          </label>
        </div>
        <button type="submit" className="form-button">Submit</button>
      </form>
    </div>
  );
  

export default SignUpForm
