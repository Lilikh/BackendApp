import { useState } from 'react';
import axios from 'axios';
import './style.css';

const CreateAccount = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleCreateAccount = async () => {
    try {
      const response = await axios.post('https://backendapp-lej6.onrender.com/users', {
        email,
        password,
      });
      console.log('Create Account Response:', response.data);
      // Handle success, e.g., redirect to dashboard
    } catch (error) {
      console.error('Create Account Error:', error);
      // Handle error
    }
  };

  return (
    <div className="create-account-form">
      <h2>Create Account</h2>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleCreateAccount}>Create Account</button>
    </div>
  );
};

export default CreateAccount;
