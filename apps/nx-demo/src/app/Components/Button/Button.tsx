import React from 'react';

import styles from './Button.module.scss';

const button = (props) => {
  const buttonClass = [styles.btn, styles.btnPrimary];
  return <button className={buttonClass.join(' ')}>{props.children}</button>;
};

export default button;
