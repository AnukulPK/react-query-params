import React from 'react';

const Comp2 = (props) => {
  console.log(props.match.params.id);
  return <div>Sample Component 2</div>;
};

export default Comp2;
