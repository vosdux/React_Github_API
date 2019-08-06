import React from 'react';

const Avatar = (props) => {
    const { src, alt } = props
    return (
        <div className="avatarWrapper">
            <img 
                src={src}
                alt={`${alt}_avatar`}
                className="avatar"    
            />
        </div>
        
    );
}
export default Avatar;