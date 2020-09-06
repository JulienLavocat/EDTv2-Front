import React, { Component } from "react";
import "dhtmlx-scheduler";
import "dhtmlx-scheduler/codebase/ext/dhtmlxscheduler_container_autoresize";
import "dhtmlx-scheduler/codebase/dhtmlxscheduler_material.css";
import "./Scheduler.css";

const scheduler = window.scheduler;

export default class Scheduler extends Component {
	componentDidMount() {
		scheduler.skin = "material";
		scheduler.config.header = [
			"day",
			"week",
			"month",
			"date",
			"prev",
			"today",
			"next"
		];

		scheduler.config.responsive_lightbox = true;
		//scheduler.config.container_autoresize = true;
		scheduler.config.first_hour = 7;
		scheduler.config.last_hour = 20;
		scheduler.config.start_on_monday = true;
		scheduler.ignore_week = function(date){
			if (date.getDay() == 6 || date.getDay() == 0) //hides Saturdays and Sundays
				return true;
		};

		scheduler.templates.event_text = function(start,end,e){
			return "<b>" + e.name + "</b><br><i>" + e.location + "</i>";
		};

		// eslint-disable-next-line react/prop-types
		const { events } = this.props;
		scheduler.init(this.schedulerContainer, new Date(), "day");
		scheduler.clearAll();
		scheduler.parse(events);
	}

	render() {
		return (
			<div
				ref={ (input) => { this.schedulerContainer = input; } }
				style={ { width: "100%", height: "100%" } }
			></div>
		);
	}
}