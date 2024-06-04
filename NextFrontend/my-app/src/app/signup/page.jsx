"use client"
<<<<<<< HEAD
import { useState } from 'react';
import styles from '../signup/Signup.module.css';

export default function Signup() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle form submission (e.g., send data to your API)
        console.log('Form data submitted:', formData);
        // Example: fetch('/api/signup', { method: 'POST', body: JSON.stringify(formData) });
    };

    return (
        <div className={styles.signupContainer}>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className={styles.submitButton}>Sign Up</button>
            </form>
        </div>
    );
}
=======
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
>>>>>>> 1a1627f439c5d4f88eb7a3a1615f1189fdd26d14
