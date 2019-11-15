import React from "react";
import "./style.css";

function MainPanel({ children }) {
	return (
		<div className="MainPanelBackground">
			<div className="MainPanelInfo">{children}</div>
			
		</div>
	);
}
export default MainPanel;
