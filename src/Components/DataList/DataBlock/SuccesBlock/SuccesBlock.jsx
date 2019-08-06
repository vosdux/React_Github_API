import React from 'react';

import Avatar from './BlockParts/Avatar/Avatar';
import Datas from './BlockParts/Datas/Datas';

import './SuccesBlock.css';

const SuccesBlock = (props) => {
    const { login, avatar_url } = props.result;
    return (
        <div className="succes">
            <Avatar src={avatar_url} alt={`${login}_avatar`}/>
            <Datas result={props.result}/>
        </div>
    );  
};

export default SuccesBlock;