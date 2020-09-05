import React, { Component } from "react";
import Scheduler from "../Components/Scheduler";
import "../App.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import API from "../Utils/API";

class Timetable extends Component {

	constructor() {
		super();
		this.state = {
			events: null,
			loaded: false
		};
	}

	componentDidMount() {

		this.events = API.getTimetableEvents().then(r => this.setState({
			events: r,
			loaded: true
		})).catch(err => this.setState({
			loadingError: err
		}));
	}

	render() {

		if(this.state.loadingError)
			return <p>An error occured: {this.state.loadingError.message}</p>;

		return this.state.loaded ? this.renderScheduler() : this.renderSpinner();
	}

	renderScheduler() {
		return (
			<div className="scheduler-container">
				<Scheduler events={this.state.events} />
			</div>
		);
	}

	renderSpinner() {
		return <div className="centerVerticalHorizontal"><Loader
			type="ThreeDots"
			color="#00BFFF"
			height={100}
			width={100}
		/></div>;
	}

}
export default Timetable;
