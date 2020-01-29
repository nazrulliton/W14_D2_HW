import React from 'react';
import Song from './Song'

const MusicList = ( {songs} ) => {

    const songList = songs.map((song) => {
        return (
            <Song name={song['im:name'].label}
                artist={song['im:artist'].label}
                key={song.id.attributes['im:id']} />
        )
    })
    

    return (
        <ol>
            {songList}
        </ol>
    )
}


export default MusicList;