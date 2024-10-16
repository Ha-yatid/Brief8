// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { PlusIcon } from '@heroicons/react/24/solid';
import UserTable from '../components/UserTable';
import Modal from '../components/Modal';
import AddUserModal from '../components/ModalAddUser';

const Home = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'Alice', age: 25, haveAccess: true },
    { id: 2, name: 'Bob', age: 30, haveAccess: false },
    { id: 3, name: 'Charlie', age: 28, haveAccess: true },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [selectedUser, setSelectedUser] = useState(null);
  const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false);

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

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">User Management</h1>

      <button 
        onClick={() => setIsAddUserModalOpen(true)} 
        className="mb-4 p-2 bg-green-500 text-white rounded flex items-center"
      >
        <PlusIcon className="h-5 w-5 mr-2" /> Ajouter un utilisateur
      </button>
      <UserTable data={users} handleDelete={handleDelete} handleViewDetails={handleViewDetails} />

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
