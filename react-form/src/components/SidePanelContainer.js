import React, { Component } from "react";
class SidePanelContainer extends Component {
	render() {
		return (
			<div
				className="contact100-more flex-col-c-m"
				style={{
					backgroundImage: `url(bg-01.jpg)`,
				}}
			>
				<div className="flex-w size1 p-b-47">
					<div className="txt1 p-r-25">
						<span className="lnr lnr-map-marker"></span>
					</div>

					<div className="flex-col size2">
						<span className="txt1 p-b-20">Address</span>

						<span className="txt2">
							Mada Center 8th floor, 379 Hudson St, New York, NY 10018 US
						</span>
					</div>
				</div>

				<div className="dis-flex size1 p-b-47">
					<div className="txt1 p-r-25">
						<span className="lnr lnr-phone-handset"></span>
					</div>

					<div className="flex-col size2">
						<span className="txt1 p-b-20">Lets Talk</span>

						<span className="txt3">+1 800 1236879</span>
					</div>
				</div>

				<div className="dis-flex size1 p-b-47">
					<div className="txt1 p-r-25">
						<span className="lnr lnr-envelope"></span>
					</div>

					<div className="flex-col size2">
						<span className="txt1 p-b-20">General Support</span>

						<span className="txt3">contact@example.com</span>
					</div>
				</div>
			</div>
		);
	}
}
export default SidePanelContainer;
