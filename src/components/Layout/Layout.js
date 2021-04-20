import React from 'react';

const container = ({ children }) => <div className="container">{children}</div>;

const row = ({ children }) => <div className="row">{children}</div>;

const column = ({ col, size, children }) => {
    let classString = 'col';
    if (size) classString = `col-${size}-${col}`;
    classString = `col-${col}`;
    return <div className={classString}>{children}</div>;
}

export {
    container as Container,
    row as Row,
    column as Column,
}