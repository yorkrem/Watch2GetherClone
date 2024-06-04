import { useState } from "react";

const UsernameModal = ({ onSubmit }) => {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      onSubmit(username);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-xl mb-4">Enter Your Username</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border p-2 w-full"
            placeholder="Username"
          />
          <button type="submit" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default UsernameModal;
