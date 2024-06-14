import  { useState } from 'react';
import axios from 'axios';
import './style.css'
const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    try {
      const response = await axios.post('https://backendapp-lej6.onrender.com/users/signin', {
        email,
        password,
      });
      console.log('Sign In Response:', response.data);
      // Handle success, e.g., redirect to dashboard
    } catch (error) {
      console.error('Sign In Error:', error);
      // Handle error
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSignIn}>Sign In</button>
    </div>
  );
};

export default SignIn;
