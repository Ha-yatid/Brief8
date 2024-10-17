// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { PlusIcon } from '@heroicons/react/24/solid';
import UserTable from '../components/UserTable';
import Modal from '../components/Modal';
import AddUserModal from '../components/ModalAddUser';

const Home = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'HY', age: 23, haveAccess: true },
    { id: 2, name: 'AY', age: 24, haveAccess: false },
    { id: 3, name: 'ZAK', age: 18, haveAccess: true },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [selectedUser, setSelectedUser] = useState(null);
  const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false);

  const [searchTerm, setSearchTerm] = useState('');

  const handleDelete = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  /*const handleViewDetails = (user) => {
    alert(`User Details:\nName: ${user.name}\nAge: ${user.age}\nAccess: ${user.haveAccess}`);
  };*/
  const handleViewDetails = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  const handleAddUser = (newUser) => {
    setUsers([...users, newUser]);
    setIsAddUserModalOpen(false); // Fermer la modal après ajout
  };

  const handleCloseAddUserModal = () => {
    setIsAddUserModalOpen(false);
  };
  const filteredUsers = searchTerm
    ? users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : users; 
  
  const handleShowAllUsers = () => {
    setSearchTerm('');
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">User Management</h1>

      <button 
        onClick={() => setIsAddUserModalOpen(true)} 
        className="mb-4 p-2 bg-green-500 text-white rounded flex items-center"
      >
        <PlusIcon className="h-5 w-5 mr-2" /> Ajouter un utilisateur
      </button>
      <div className="flex mb-4">
        <input 
          type="text" 
          placeholder="Search by name..." 
          className="p-2 border rounded flex-grow"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleShowAllUsers} className="ml-2 p-2 bg-blue-500 text-white rounded">Afficher tous
        </button>
      </div>

      <UserTable data={filteredUsers} handleDelete={handleDelete} handleViewDetails={handleViewDetails} />

      
      {isModalOpen && selectedUser && (
        <Modal user={selectedUser} onClose={handleCloseModal} />
      )}

      {isAddUserModalOpen && (
        <AddUserModal onAddUser={handleAddUser} onClose={handleCloseAddUserModal} />
      )}

    </div>
  );
};

export default Home;
