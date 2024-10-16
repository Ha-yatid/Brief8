/* eslint-disable react/prop-types */
import { EyeIcon, TrashIcon } from '@heroicons/react/24/solid';

const UserTable = ({ data, handleDelete, handleViewDetails }) => {
  return (
    <table className="min-w-full table-auto bg-white shadow-md rounded">
      <thead>
        <tr>
          <th className="px-4 py-2">Name</th>
          <th className="px-4 py-2">Age</th>
          <th className="px-4 py-2">Access</th>
          <th className="px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((user) => (
          <tr key={user.id} className="border-t">
            <td className="px-4 py-2">{user.name}</td>
            <td className="px-4 py-2">{user.age}</td>
            <td className="px-4 py-2">
              <span className={`${
                user.haveAccess ? 'text-green-600' : 'text-red-600'
              } font-bold`}>
                {user.haveAccess ? 'True' : 'False'}
              </span>
            </td>
            <td className="px-4 py-2 flex space-x-2">
              <button
                onClick={() => handleViewDetails(user)}
                className="text-blue-500 hover:text-blue-700"
              >
                <EyeIcon className="h-5 w-5" />
              </button>
              <button
                onClick={() => handleDelete(user.id)}
                className="text-red-500 hover:text-red-700"
              >
                <TrashIcon className="h-5 w-5" />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
