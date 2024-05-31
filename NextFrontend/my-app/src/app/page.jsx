"use client"
import { useRouter } from 'next/navigation';
import {createroom} from "./requests/room/createroom"
import { signOut, auth} from '../app/config/firebaseconfig';
import { removeToken } from './utils/localStorage';

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

  const generateRoom = async () => {
      const id = generateRandomString()
      const response = await createroom(id)
      console.log(response)
      if(response)
        router.push(`/room/${id}`);
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
      console.log('User signed out successfully');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  }
  return (
    <>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={generateRoom}>Create Room</button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={signUpPage}>Sign up</button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={signinPage}>Sign in</button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={signout}>Sign out</button>
    </>
  );
}
