import React, { useState } from 'react';

const App = () => {

  const [firstName, setFirstName] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    alert(`Bonjour ${firstName}`)
    setFirstName('')
  }

  const handleChange = event => {
    setFirstName(event.target.value)
  }

  return (
    <div>
      <h1>Bienvenue chez nous !</h1>
      <h2>Connectez-vous</h2>
      <form action='submit' onSubmit={handleSubmit}>
        <input
          type="text"
          value={firstName}
          placeholder='Entrez votre prénom ...'
          required
          onChange={handleChange}

        />
        <button>Accéder à votre espace</button>
      </form>

    </div>
  );
};

export default App;

