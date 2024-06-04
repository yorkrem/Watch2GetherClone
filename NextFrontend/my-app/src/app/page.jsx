"use client"
import { useRouter } from 'next/navigation';
<<<<<<< HEAD
import {createroom} from "../app/requests/createroom"
=======
import {createroom} from "./requests/room/createroom"
import { signOut, auth} from '../app/config/firebaseconfig';
import { removeToken } from './utils/localStorage';
>>>>>>> 1a1627f439c5d4f88eb7a3a1615f1189fdd26d14

export default function Home() {
  const router = useRouter();

  const generateRandomString = () => {
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let result = '';
      const charactersLength = characters.length;
      for (let i = 0; i < 20; i++) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
  }

<<<<<<< HEAD
  const generateRoom = () => {
      const id = generateRandomString()
      createroom(id)
      router.push(`/room/${id}`);
   
=======
  const generateRoom = async () => {
      const id = generateRandomString()
      const response = await createroom(id)
      console.log(response)
      if(response)
        router.push(`/room/${id}`);
>>>>>>> 1a1627f439c5d4f88eb7a3a1615f1189fdd26d14
  }

  const signUpPage = () => {
      router.push('/signup')
  }

  const signinPage = () => {
    router.push('/signin')
  }

  const signout = async () => {
    try {
      await signOut(auth);
      removeToken()
      localStorage.removeItem("username");
      console.log('User signed out successfully');
    } catch (error) {
      console.error('Error signing out:', error);

    }
  }
  return (
    <>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={generateRoom}>Create Room</button>
<<<<<<< HEAD
=======
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={signUpPage}>Sign up</button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={signinPage}>Sign in</button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={signout}>Sign out</button>
>>>>>>> 1a1627f439c5d4f88eb7a3a1615f1189fdd26d14
    </>
  );
}
