import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import Timetable from "./Pages/Timetable";
import { Switch, Router, Route, BrowserRouter } from "react-router-dom";
import Timetable2 from "./Pages/Timetable2";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

ReactDOM.render(
	<BrowserRouter>
		<Switch>
			<Route path="/v2"><Timetable2/></Route>
			<Route path="/"><Timetable /></Route>
		</Switch>
	</BrowserRouter>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register(toast);