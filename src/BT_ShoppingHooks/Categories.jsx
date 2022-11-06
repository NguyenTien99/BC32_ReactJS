import React from 'react';
import { Form } from 'react-bootstrap';

const Categories = ({ categories, onSelect }) => {
    console.log(categories)
  return (
    <div className='d-flex'>
        <Form.Select onChange={(evt) => onSelect(evt.target.value)}>
            <option value="">Chọn danh mục</option>
            {categories.map((item) => (
                <option key={item.id} value={item.id}>{item.category}</option>
            ))}
        </Form.Select>
    </div>
  );
};

export default Categories;