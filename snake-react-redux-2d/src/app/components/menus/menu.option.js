import React from 'react';

const Option = (props) => {
    return (<text style={{textAnchor: "middle"}} {...props} onClick={props.onClick}>{props.label} </text>)
};

export default Option;