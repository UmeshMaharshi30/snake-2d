import React from 'react';
import Option from './menu.option';

const MenuOptions = (props) => {
    return (
        <g style={{}}>
            <Option className={'menuOptions'} x={props.width/2} y={props.height/2 - 40} label={'New Game'}/>
            <Option className={'menuOptions'} x={props.width/2} y={props.height/2} label={'Instructions'}/>
            <Option className={'menuOptions'} x={props.width/2} y={props.height/2 + 40} label={'Quit'}/>
        </g>
    );
}

export default MenuOptions;