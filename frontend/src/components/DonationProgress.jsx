import { Progress, Typography } from "antd";
const { Title } = Typography;
import { Col, Row } from "antd";
import DonationPurchaseables from "./DonationPurchaseables";
import { useEffect, useState } from "react";
import Constants from "../utils/Constants";

export default function DonationProgress() {
	const [donationData, setDonationData] = useState();

	useEffect(() => {
		fetchDonationData();
		setInterval(() => {
			fetchDonationData();
		}, 5000);
	}, []);

	const fetchDonationData = async () => {
		const response = await fetch(`${Constants.BACKEND_SERVER_ROOT}/donations/1`);
		// if response is 404, create a new entity
		if (response.status === 404) {
			const newlyCreatedResponseData = await createDefaultEntity();
			setDonationData(newlyCreatedResponseData);
		} else {
			const data = await response.json();
			setDonationData(data);
		}
	};

	const createDefaultEntity = async () => {
		const response = await fetch(`${Constants.BACKEND_SERVER_ROOT}/donations/1`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				id: 1,
				totalDonation: 10000,
				boostAmount: 0,
				currentDonation: 0,
			}),
		});
		return response.json();
	};

	return (
		<>
			<Row justify="space-evenly" gutter={[4, 20]}>
				<Col>
					<Title>
						Donation Goal:{" "}
						{`₹${donationData?.currentDonation + donationData?.boostAmount} / ₹${
							donationData?.totalDonation
						}`}
					</Title>
				</Col>
				<Col xs={22}>
					<DonationPurchaseables
						donatedAmount={donationData?.currentDonation + donationData?.boostAmount}
					/>
				</Col>
				<Col xs={22}>
					<Progress
						size={{ height: 50 }}
						percent={
							((donationData?.currentDonation + donationData?.boostAmount) /
								donationData?.totalDonation) *
							100
						}
						percentPosition={{
							align: "center",
							type: "inner",
						}}
						status="active"
						strokeColor={{
							from: "#108ee9",
							to: "#87d068",
						}}
					/>
				</Col>
			</Row>
		</>
	);
}
