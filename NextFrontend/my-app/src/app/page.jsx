"use client"
import { useRouter } from 'next/navigation';
import {createroom} from "../app/requests/createroom"

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

  const generateRoom = () => {
      const id = generateRandomString()
      createroom(id)
      router.push(`/room/${id}`);
   
  }

  const signUpPage = () => {
      router.push('/signup')
  }

  return (
    <>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={generateRoom}>Create Room</button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={signUpPage}>Sign up</button>
    </>
  );
}
