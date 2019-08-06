import React from 'react';

const ErrorBlock = (props) => (
    <div className="textBlock">
        <h2 className="textBlock__title textBlock__title_status_error">{props.message}</h2>
    </div>
);

export default ErrorBlock;
