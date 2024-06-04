"use client"
import { createUserWithEmailAndPassword, auth } from '../config/firebaseconfig';
import { useState } from 'react';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password); // Pass auth as the first argument
      console.log("User created successfully");
      // Handle successful sign-up
    } catch (error) {
      // Handle sign-up errors
      console.error('Error signing up with email and password:', error);
    }
  };

  return (
    <div>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSignUp}>Sign up</button>
    </div>
  );
};

export default SignUp;
