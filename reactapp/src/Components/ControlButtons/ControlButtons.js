import React from "react";
import "./ControlButtons.css";

export default function ControlButtons(props) {
	const StartButton = (
		<div className="btn-grp">
			<div className="btn btn-one btn-start"
				onClick={props.handleStart}>
				Start
			</div>
			<div className="btn btn-two1"
				onClick={props.handleReset}>
				Reset
			</div>
		</div>
	);
	const ActiveButtons = (
		<div className="btn-grp">
			<div className="btn"
				onClick={props.handlePauseResume}>
				{props.isPaused ? "Resume" : "Pause"}
			</div>
			<div className="btn" aria-disabled="true"
				onClick={props.handleReset}>
				Reset
			</div>
		</div>
	);

	return (
		<div className="Control-Buttons">
			<div>{props.active ? ActiveButtons : StartButton}</div>
		</div>
	);
}
