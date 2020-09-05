import React, { Component } from "react";
import Scheduler2 from "../Components/Scheduler2/Scheduler2";
import API from "../Utils/API";
import Loader from "react-loader-spinner";
import "./Timetable2.css";

export default class Timetable extends Component {

	constructor() {
		super();
		this.state = {
			events: null,
			loaded: false
		};
	}

	componentDidMount() {

		this.events = API.getTimetableEvents()
			.then(r => this.toV2Events(r))
			.then(r => this.setState({
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
			<div>
				<div className="timetable2-app">
					<div className="timetable2-app-main"><Scheduler2 events={this.state.events} /></div>
				</div>
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

	toV2Events(events) {
		return events.map(e => ({
			id: e.id,
			start: e.start_date,
			end: e.end_date,
			title: e.name + "\n" + e.location
		}));
	}

}