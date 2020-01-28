import React  from 'react';

class MusicContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            songs: [],
            selectedImId: ''
        };
    }
componentDidMount(){
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
    fetch(url)
    .then(res => res.json())
    .then(songs => this.setState({songs: songs.feed.entry}))
    .catch(err => console.error);
}

render(){
    const selectedSong = this.state.songs.find(song => song.id.attributes['im:id'] === this.state.selectedImId)

    return (
        <div> 
            <h2>Music Container</h2>
            {/* <MusicList/>
            <Song/> */}
        </div>
    )
}





}

export default MusicContainer;