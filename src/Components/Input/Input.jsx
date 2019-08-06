import React from 'react';

import './Input.css';

const Input = ({ onChange, onKeyPress }) => (
    <div className="inputWrapper">
        <i className="fas fa-search" />
        <input
            className="input"
            placeholder="Поиск"
            onChange={onChange}
            onKeyPress={onKeyPress}
        />
    </div>
);

export default Input;