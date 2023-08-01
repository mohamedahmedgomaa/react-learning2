import React from 'react';

const Row = (props) => {
    return (
        <div style={props.style}
             className={props.className}
        >
            {props.children}
        </div>
    )
}

export default Row;