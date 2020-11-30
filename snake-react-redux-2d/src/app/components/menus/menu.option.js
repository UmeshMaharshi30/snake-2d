import React from 'react';

const Option = (props) => {
    return (<text style={{textAnchor: "middle"}} {...props} onClick={() => console.log(props.label)}>{props.label} </text>)
};

export default Option;