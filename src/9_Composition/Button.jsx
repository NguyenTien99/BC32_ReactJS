import React from 'react';

const Button = ({ variant, children, className, onClick,  ...rest }) => {
    const classes = `btn btn-${variant} ${className}`
  return (
    <button className={classes} onClick={onClick} {...rest}>{children}</button>
  );
};

export default Button;

/**
 * Thay vì gọi: 
 * - <button className="btn btn-primary">Hello</button>
 * - <button className="btn btn-success">Hello</button>
 * 
 * Ta sẽ gọi: 
 * - <Button variant="primary">Hello</Button>
 * - <Button variant="success">Hello</Button>
 * 
 */

// VD: rest = {type: "button", disabled: false}
{/* <button {...rest}></button>
<button type="button" disabled="false">s/button> */}