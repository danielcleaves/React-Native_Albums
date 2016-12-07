import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios'
import AlbumDetail from './AlbumDetail'

class AlbumList extends Component {

	state = { albums: [] };

	componentWillMount() {
		// Api call to music_albums on heroku server
		axios.get('https://rallycoding.herokuapp.com/api/music_albums')
		// Called once the http request is complete
		.then(response => this.setState({albums: response.data}));
	}

	renderAlbums() {
		return this.state.albums.map(album => 
			<AlbumDetail key ={album.title} album={album} />
			);
	}

	render () {
		console.log(this.state);
	return (
		<ScrollView>
			{this.renderAlbums()}
		</ScrollView>
	);
 }
}

export default AlbumList;