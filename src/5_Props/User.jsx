import React from 'react';

const User = ({ user, onSelect }) => {
  return (
    <div className='mb-3'>
        {user.name} - {user.age}
        <button 
        className='btn btn-secondary ms-2'
        onClick={() => onSelect(user)}
        >Chi tiết</button>
    </div>
  );
};

export default User;
