import React from 'react';

const Search = ({onSearch}) => {

    const handleSearch = (evt) =>{
        if(evt.key !== "Enter") return;

        // Truyền giá trị search cho component UserManagement thông qua prop onSearch
        onSearch(evt.target.value);
    }

  return (
    <div className="d-flex justify-content-end">
        <input 
        type="text" 
        className="form-control w-25" 
        placeholder="Search by email"
        onKeyDown={handleSearch}
        />
    </div>
    
  )
};

export default Search;