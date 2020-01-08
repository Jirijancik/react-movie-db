import React, { useState, useRef } from 'react'

import '../../styles/MoviePlayer'
import '../../styles/MovieInfoWindow'

import covervid from './dummyTrailer.mp4';


const MoviePlayer = ({ MovieImageURL }) => {

    const [isPlaying, setIsPlaying] = useState(false);

    const videoElementRef = useRef(null);


    const handleOnClick = () => {

        const video = videoElementRef.current;

        if (!isPlaying) {
            video.play();
            setIsPlaying(true);
        } else {
            video.pause();
            setIsPlaying(false);
        }
        if (video.ended) {
            setIsPlaying(false);
        }
    }

    let content = [

        <div className="movie-player">

            <button
                className={isPlaying ? "movie-player__button hidden" : "movie-player__button"}
                onClick={handleOnClick}
            >
                <svg className="movie-player__button--medium" width="160" height="160" viewBox="0 0 573 556" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M420.162 257.823L216.839 137.879C198.586 128.015 175.597 140.681 175.597 161.419V394.581C175.597 415.206 198.471 427.985 216.839 418.121L420.162 304.903C439.107 294.702 439.107 268.135 420.162 257.823ZM573 278C573 124.427 444.768 0 286.5 0C128.232 0 0 124.427 0 278C0 431.573 128.232 556 286.5 556C444.768 556 573 431.573 573 278ZM55.4516 278C55.4516 154.133 158.846 53.8065 286.5 53.8065C414.154 53.8065 517.548 154.133 517.548 278C517.548 401.867 414.154 502.194 286.5 502.194C158.846 502.194 55.4516 401.867 55.4516 278Z" fill="url(#paint0_linear)" />
                    <defs>
                        <linearGradient id="paint0_linear" x1="286.5" y1="0" x2="286.5" y2="556" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#C006DE" />
                            <stop offset="1" stopColor="#11145C" />
                        </linearGradient>
                    </defs>
                </svg>
            </button>


            <div className="movie-player__container">
                <video
                    className="c-video"
                    poster={MovieImageURL}
                    ref={videoElementRef}
                >
                    <source src={covervid} type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser.
                </video>
                <div className="movie-player__controls">
                    <div className="movie-player__video-progress">
                        <div className="movie-player__video-progress__meter"></div>
                    </div>
                </div>
            </div>
        </div>

    ];




    return content;

}

export default MoviePlayer;