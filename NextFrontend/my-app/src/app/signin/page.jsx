"use client"
import { useState } from 'react';
import styles from '../signup/Signup.module.css';
import { login } from '../requests/account/login'
import { useRouter } from 'next/navigation';

export default function Signin() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        username: '',
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
        login(formData)
            .then((loginSuccessful) => {
                // Use the loginSuccessful boolean value here
                if (loginSuccessful) {
                    // Login was successful
                    console.log("Login successful");
                    router.push("/")
                } else {
                    // Login failed
                    console.log("Login failed");
                }
            })
            .catch((error) => {
                // Handle any errors here
                console.log("An error occurred during login:", error);
            });
        // Handle form submission (e.g., send data to your API)
        
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
                <button type="submit" className={styles.submitButton}>Sign In</button>
            </form>
        </div>
    );
}
