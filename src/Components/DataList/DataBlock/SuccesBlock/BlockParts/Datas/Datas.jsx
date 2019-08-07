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
            <div className="line">
                <span className="line__name">id: </span>
                <span className="line__data">{id}</span>
            </div>
            <div className="line">
                <span className="line__name">Профиль: </span>
                <span className="line__data">{html_url}</span>
            </div>
            {name &&
                <div className="line">
                    <span className="line__name">Имя: </span>
                    <span className="line__data">{name}</span>
                </div>
            }
            {bio &&
                <div className="line">
                    <span className="line__name">Био: </span>
                    <span className="line__data">{bio}</span>
                </div>
            }
            <div className="line">
                <span className="line__name">Число репозиториев: </span>
                <span className="line__data">{public_repos}</span>
            </div>
            <div className="line">
                <span className="line__name">Подписчики: </span>
                <span className="line__data">{followers}</span>
            </div>
            <div className="line">
                <span className="line__name">Создан: </span>
                <span className="line__data">{created_at}</span>
            </div>
            <div className="line">
                <span className="line__name">Последнее обновление: </span>
                <span className="line__data">{updated_at}</span>
            </div>
        </div>
    );
};

export default Datas;