import React, { useState } from "react";
import ComponentA from '../ComponentA';
import ComponentB from '../ComponentB';

const Contact = () => {
  const [message, setMessage] = useState('');
  
  return <div>

<ComponentA setMessage={setMessage} />
<ComponentB message={message} />
  </div>;
};

export default Contact;
