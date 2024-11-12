import { Progress, Typography } from "antd";
const { Title } = Typography;
import { Col, Row } from "antd";
import DonationPurchaseables from "./DonationPurchaseables";

export default function DonationProgress() {
	const totalDonation = 10000;
	const boostAmount = 2000;
	const currentDonation = boostAmount + 0;
	return (
		<>
			<Row justify="space-evenly" gutter={[4, 20]}>
				<Col>
					<Title>Donation Goal: {`₹${currentDonation} / ₹${totalDonation}`}</Title>
				</Col>
				<Col xs={22}>
					<DonationPurchaseables donatedAmount={currentDonation} />
				</Col>
				<Col xs={22}>
					<Progress
						size={{ height: 50 }}
						percent={(currentDonation / totalDonation) * 100}
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
