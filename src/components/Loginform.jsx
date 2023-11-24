import React, {useState} from 'react'

const Loginform = () => {
        const [name, setName] = useState('');
        const [password, setPassword] = useState('');
        const [isLoggedIn, setIsLoggedIn] = useState(false);
        const [error, setError] = useState('');
      
        // Hardcoded correct username and password for demonstration purposes
        const correctName = 'user123';
        const correctPassword = 'password123';
      
        const handleNameChange = (e) => {
          setName(e.target.value);
        };
      
        const handlePasswordChange = (e) => {
          setPassword(e.target.value);
        };
      
        const handleSubmit = (e) => {
          e.preventDefault();
      
          if (name === correctName && password === correctPassword) {
            setIsLoggedIn(true);
            setError('');
          } else {
            setIsLoggedIn(false);
            setError('Invalid name or password. Please try again.');
          }
        };
  return (
    <div>
         {isLoggedIn ? (
        <p>Welcome, {name}!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Name:
              <input type="text" value={name} onChange={handleNameChange} />
            </label>
          </div>
          <div>
            <label>
              Password:
              <input type="password" value={password} onChange={handlePasswordChange} />
            </label>
          </div>
          <button type="submit">Login</button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
      )}
    </div>
  )
}

export default Loginform
