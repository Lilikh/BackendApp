// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './SignIn';
import CreateAccount from './SignUp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<CreateAccount />} />
      </Routes>
    </Router>
  );
}

export default App;
