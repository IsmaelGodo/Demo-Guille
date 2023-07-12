import React, { useContext }from 'react';
import { UserContext } from '../../../context/userContext';



const ComponentB = ({ message }) => {

const { user, updateUser } = useContext(UserContext)

const handleChange= (event) =>{
  updateUser(event.target.value);
};
  return (
    <div>
      <p>Mensaje recibido: {message}</p>
      <p>User : {user}</p>
      <input type="text" onChange={handleChange}/>
    </div>
  );
};

export default ComponentB;