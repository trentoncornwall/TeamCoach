import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function MainNav() {
	return (
		<div className="MainNav">
			<ul>
				<li>
					<Link
						to="/teams"
						className={
							window.location.pathname === "/main" ||
							window.location.pathname === "/teams"
								? "nav-link active"
								: "nav-link"
						}
					>
						Teams
					</Link>
				</li>

				<li>
					{" "}
					<Link
						to="/"
						className={
							window.location.pathname === "/" ||
							window.location.pathname === "/about"
								? "nav-link active"
								: "nav-link"
						}
					>
						Reporting
					</Link>
				</li>
			</ul>
			<hr></hr>
		</div>
	);
}
export default MainNav;
