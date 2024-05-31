"use client"
import { useState } from 'react';
import { signInWithEmailAndPassword, auth } from '../config/firebaseconfig';
import { Login } from '../requests/account/login'
import {saveToken} from '../utils/localStorage'

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSignIn = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      // Get the ID token
      const idToken = await user.getIdToken();
      console.log(idToken)
      await Login(idToken)
      saveToken(idToken)
      /*if(response.status == 200)
        console.log("Authenticated successfully: ", response)*/
    } catch (error) {
      console.error('Error signing in with email and password:', error);
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
