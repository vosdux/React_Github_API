import React from 'react';

import ErrorBlock from './DataBlock/ErrorBlock';
import SuccesBlock from './DataBlock/SuccesBlock/SuccesBlock';
import StartBlock from './DataBlock/StartBlock';

import './DataList.css';


const DataList = (props) => {
    const { login, message } = props.result;

    if (message) {
        return (
            <ErrorBlock message={message} />
        );
    } else if (login) {
        return (
            <SuccesBlock result={props.result}/>
        );
    } else {
        return (
            <StartBlock />
        );
    }
    
}

export default DataList;