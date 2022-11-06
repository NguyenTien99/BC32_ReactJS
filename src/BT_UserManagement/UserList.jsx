import React from 'react';
import axios from 'axios';

const UserList = ({ users, onDeleteSuccess, onSelect }) => {
    const handleDelete = async (userId) => {
        try {
            // call ApI delete
            await axios.delete(`https://62f50938535c0c50e76847ad.mockapi.io/user/${userId}`);
            // Call API thành công, dữ liệu chỉ mới được thay đổi ở phía server, cần gọi lại API get users và setState => ta truyền hàm fetchUser thông qua prop onDeleteSuccess và gọi nó sau khi call API thành công
            onDeleteSuccess();
        } catch (error) {
            console.log(error)
        }
    }

    const handleSelect = (userId) => {
        // Gọi prop onSelect để truyền id của user muốn update lên cho component UserManagement
        onSelect(userId);
    }

  return (
    <table className='table'>
        <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Date of Birth</th>
                <th>Address</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {
                users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.email}</td>
                        <td>{user.dateOfBirth}</td>
                        <td>{user.address}</td>
                        <td>
                            <button 
                            className='btn btn-primary'
                            onClick={() => handleSelect(user.id)}
                            >
                                Update</button>
                            <button className='btn btn-danger' onClick={() => handleDelete(user.id)}>Delete</button>
                        </td>
                    </tr>
                ))
            }
        </tbody>
    </table>
  )
};

export default UserList;