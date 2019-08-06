import React from 'react';

import './Datas.css';

const Datas = (props) => {
    const { login, id, html_url, name, bio, public_repos, followers, created_at, updated_at } = props.result;
    return (
        <div className="datas">
            <div className="line">
                <span className="line__name">Логин: </span>
                <span className="line__data">{login}</span>
            </div>
            <span className="line">{`id: ${id}`}</span>
            <span className="line">{`Profile link: ${html_url}`}</span>
            <span className="line">{`User name: ${name}`}</span>
            <span className="line">{`Biography: ${bio}`}</span>
            <span className="line">{`Number of rep: ${public_repos}`}</span>
            <span className="line">{`Followers: ${followers}`}</span>
            <span className="line">{`Create at: ${created_at}`}</span>
            <span className="line">{`Update at: ${updated_at}`}</span>
        </div>
    );
};

export default Datas;