import React, { Component } from "react";
import Scheduler from "../Components/Scheduler";
import "../App.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const data = [
	{ start_date: "2020-06-10 6:00", end_date: "2020-06-10 8:00", text: "Event 1", id: 1 },
	{ start_date: "2020-06-13 10:00", end_date: "2020-06-13 18:00", text: "Event 2", id: 2 }
];

class Timetable extends Component {

	constructor() {
		super();
		this.state = {
			data: null,
			loaded: false
		};
	}

	componentDidMount() {

		this.events = new Promise((resolve) => {
			setTimeout(() => resolve(), 5000);
		}).then(() => this.setState({
			loaded: true
		}));
	}

	render() {
		return this.state.loaded ? this.renderScheduler() : this.renderSpinner();
	}

	renderScheduler() {
		return (
			<div>
				<div className="scheduler-container">
					<Scheduler events={data} />
				</div>
			</div>
		);
	}

	renderSpinner() {
		console.log("render spinner");
		return <div className="centerVerticalHorizontal"><Loader
			type="ThreeDots"
			color="#00BFFF"
			height={100}
			width={100}
		/></div>;
	}

}
export default Timetable;
