import React from 'react';
import {GAME_DIMENSIONS} from '../../constants/games.constants';
import MenuOptions from './../menus/menu';

const GameCanvas = () => {
    const height = GAME_DIMENSIONS.height;
    const width = GAME_DIMENSIONS.width;

    return (
    <div className="gameCanvas">
        <svg width={width} height={height} style={{background: 'lightgrey'}}>
            <MenuOptions height={height} width={width}/>
        </svg>
    </div>)
};

export default GameCanvas;