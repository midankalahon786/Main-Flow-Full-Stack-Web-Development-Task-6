import React from 'react';
import { AuthProvider } from './AuthContext';
import Navbar from './Navbar';
import SignUp from './Signup';
import SignIn from './SignIn';
import Profile from './Profile';
import Welcome from './Welcome';
import Contact from './Contact';
import About from './About';
import Dashboard from './Dashboard';
import ForgotPassword from './ForgotPassword';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact" element={<Contact />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
