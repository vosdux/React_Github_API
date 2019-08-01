import React from 'react';

import './DataList.css';

const DataList = (props) => {
    const { login, id, avatar_url, html_url, name, bio, public_repos, followers, created_at, updated_at } = props.result;
    return (
        <div className="data">
            <img src={avatar_url} alt={`${login}_avatar`} className="avatar"/>
            <span className="line">{`Login: ${login}`}</span>
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
}

export default DataList;