import React from 'react';

const button = (props) => {
  const buttonClass = ['button', 'button--primary'];
  return (
    <button onClick={props.clicked} className={buttonClass.join(' ')}>
      {props.children}
    </button>
  );
};

export default button;
