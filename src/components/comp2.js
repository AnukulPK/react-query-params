import React, { useState } from 'react';

const Comp2 = (props) => {
  //   console.log(props.match.params.id);
  const [name, setName] = useState(props.match.params.id);

  return (
    <form>
      <p>Enter your name</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </form>
  );
};

export default Comp2;
