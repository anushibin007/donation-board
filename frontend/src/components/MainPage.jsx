import { Col, Row, Typography } from "antd";
const { Title } = Typography;
import RecentBuyers from "./RecentBuyers";
import DonationProgress from "./DonationProgress";
import VisitorCount from "./VisitorCount";
import DonationPurchaseables from "./DonationPurchaseables";

export default function MainPage() {
	return (
		<>
			<Row justify="space-evenly" gutter={[4, 20]}>
				<Col>
					<Title>OT Koti Donations</Title>
				</Col>
				<Col xs={24}>
					<RecentBuyers />
				</Col>
				<Col xs={24}>
					<DonationProgress />
				</Col>
				<Col>
					<VisitorCount />
				</Col>
			</Row>
		</>
	);
}
