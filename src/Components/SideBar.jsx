import React from 'react';

function Sidebar({ username = 'User Name' }) {
  return (
    <div className="w-64 min-h-screen bg-sky-950 text-white flex flex-col p-6 shadow-lg">
      <h2 className="text-2xl font-bold mb-6">{username}</h2>

      <nav className="flex flex-col gap-4">
        <button className="bg-sky-600 text-white font-semibold px-4 py-2 rounded ">Dashboard</button>
        <button className="bg-sky-600 text-white font-semibold px-4 py-2 rounded ">Properties</button>
        <button className="bg-sky-600 text-white font-semibold px-4 py-2 rounded ">Profile</button>
        <button className="bg-sky-600 text-white font-semibold px-4 py-2 rounded ">Logout</button>
      </nav>
    </div>
  );
}

export default Sidebar;