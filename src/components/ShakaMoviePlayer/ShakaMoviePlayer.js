import React from 'react';

/* 
* Library for transmuxing TS to MP4 for browsers. MPEG2-TS streams are not allways supported. 
*/
import muxjs from "mux.js";

//Import Styles 
import 'shaka-player/dist/controls.css';
//Import Styles for Shaka Player UI Customization
import '../../styles/ShakaPlayer';
//Import ShakaPlayer JS
const shaka = require('shaka-player/dist/shaka-player.ui.js');

/**
 * Shaka Movie Player component with hardcoded HLS stream adress. Consists of Big Play Button, Mute, Fullscreen and Track Bar. 
 * Using custom styles and Muxjs
 */
class ShakaMoviePlayer extends React.PureComponent{

	constructor(props){
		super(props);
		//Assigning muxi to global environment
		window.muxjs = muxjs;

		//Creating reference to store video component
		this.videoComponent = React.createRef();

		//Creating reference to store video container
		this.videoContainer = React.createRef();

		//Initializing reference to error handlers
		this.onErrorEvent = this.onErrorEvent.bind(this);
		this.onError = this.onError.bind(this);
	}

	onErrorEvent(event) {
	  // Extract the shaka.util.Error object from the event.
	  this.onError(event.detail);
	}

	onError(error) {
	  // Log the error.
	  console.error('Error code', error.code, 'object', error);
	}

	componentDidMount(){
		//Link to HLS stream
		var manifestUri = 'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8';

		//Getting reference to video and video container
		const video = this.videoComponent.current;
		const videoContainer = this.videoContainer.current;

		//Initialize shaka player
		var player = new shaka.Player(video);

		//Setting UI configuration with custom seekBar collors and control panel elements
		const uiConfig = {
            seekBarColors: {
                base: 'rgba(0, 0, 0, 0.1)',
                buffered: 'rgba(0, 0, 0, 0.3)',
                played: '#c202d4',
            },
            'controlPanelElements': ['spacer','mute', 'fullscreen']
        };
		  
		//Setting up shaka player UI
      	const ui = new shaka.ui.Overlay(player, videoContainer, video);

        ui.configure(uiConfig);
      	ui.getControls();

		// Listen for error events.
  		player.addEventListener('error', this.onErrorEvent);

  		// Try to load a manifest.
	  	// This is an asynchronous process.
	  	player.load(manifestUri).then(function() {
		    // This runs if loading is successful.
		    console.log('The video has now been loaded!');
	  	}).catch(this.onError);  // onError is executed if loading fails.

	}

	render(){

		/*
		* Returning video with a container. 
		*/
		
		return(
			<div 
			className="movie-player" 
			ref={this.videoContainer}
			key={this.props.id + "Shaka-Player"}
			>
				<video 
					className="shaka-video"
					ref={this.videoComponent}
					poster=""
				/>
			</div>
		);
	}
}

export default ShakaMoviePlayer;