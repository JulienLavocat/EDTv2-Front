import React from "react";
import FullCalendar from "@fullcalendar/react";
import timeGridWeek from "@fullcalendar/timegrid";
import momentPlugin from "@fullcalendar/moment";
import dayGridWeek from "@fullcalendar/daygrid";
import bootstrapPlugin from "@fullcalendar/bootstrap";
//import "bootswatch/dist/darkly/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";

export default class Scheduler2 extends React.Component {

	constructor() {
		super();
	}

	render() {
		//return <FullCalendar plugins={[timeGridWeek]} initialView="timeGridWeek"/>;
		return <FullCalendar
			themeSystem="standard"
			plugins={[bootstrapPlugin, momentPlugin, timeGridWeek]}
			initialView="timeGridWeek"
			// eslint-disable-next-line react/prop-types
			events={this.props.events}
			headerToolbar={{
				left: "prev,today,next",
				center: "title",
				right: "timeGridDay,timeGridWeek"
			}}
			firstDay={1}
			hiddenDays={[0, 6]}
			slotLabelFormat="H:mm"
			dayHeaderFormat="dddd D/MM"
			slotMinTime="07:00:00"
			slotMaxTime="20:00:00"
			allDaySlot={false}
			editable={false}
			contentHeight="auto"
			eventMinHeight="auto"
		/>;
	}

}