import React,  from 'react';

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
    .then(songs => this.setState({songs: songs}))
    .catch(err => console.error);
}






}