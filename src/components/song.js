import React from 'react';

const Song = ({ name, artist }) => {

    return (
        <li>
            <h4>{name}</h4>
            <p>{artist}</p>
        </li>

    )

}

export default Song;