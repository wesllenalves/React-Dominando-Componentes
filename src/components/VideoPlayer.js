import React, {Component} from 'react';

class VideoPlayer extends Component {
    render(){
        return (
            <div className="video-player">
                <video 
                    src={'https://static.videezy.com/system/resources/previews/000/018/793/original/Bacteria-blue.mp4'}
                    controls autoPlay loop
                />
                <button>[]</button>
            </div>
        );
    }
}

export default VideoPlayer;