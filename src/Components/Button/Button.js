import React from "react";
import { Link } from "react-router-dom";

import "./Button.scss";

export default function Button(props) {
	return (
		<Link className="button-link" to={props.toLink || null} target={props.target || null}>
			<button
				className={`button-container ${props.className ? props.className : ""} ${
					props.children ? "" : "button-locked"
				}`}
				onClick={props.onClick ? props.onClick : null}
				onSubmit={props.onSubmit ? props.onSubmit : null}
				type={props.type ? props.type : null}
				id={props.id ? props.id : null}
			>
				{props.children}
			</button>
		</Link>
	);
}
