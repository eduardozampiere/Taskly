import React, {Component} from 'react';

import {FaRandom, FaStepBackward, FaStepForward, FaPlay} from 'react-icons/fa';

class Music extends Component{
    render(){
        return(
            <>
                <div className="music-header">
                    <img src="https://cdn.imgbin.com/21/18/19/imgbin-phonograph-record-lp-record-album-disc-music-others-i6CQnsxKJZQaL4Qqm3bGXMVHc.jpg" alt="album"/>
                    <div className="music-info">
                        <span className="music-name">Godzilla</span>
                        <span className="music-author">Eminem</span>
                    </div>
                </div>

                <div>

                </div>

                <div className="music-control">
                    <div className=""> <FaRandom color="#F8D57E"/> </div>
                    <div className=""> <FaStepBackward color="#F8D57E" /> </div>
                    <div className=""> <FaPlay color="#F8D57E" /> </div>
                    <div className=""> <FaStepForward color="#F8D57E" /> </div>
                </div>
            </>
        );
    }
}

export default Music;