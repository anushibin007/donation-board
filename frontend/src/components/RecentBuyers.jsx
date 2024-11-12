import { Col, Row } from "antd";
import BuyerCard from "./BuyerCard";

export default function RecentBuyers() {
	const recentBuyers = [
		{
			id: 1,
			name: "John Doe",
			amount: 100,
			item: "Sticker",
			date: "2021-10-10",
		},
		{
			id: 2,
			name: "Jane Doe",
			amount: 200,
			item: "Bhel Puri",
			date: "2021-10-10",
		},
		{
			id: 3,
			name: "John Smith",
			amount: 300,
			item: "Sticker Pack",
			date: "2021-10-10",
		},
	].slice(0, 3);
	return (
		<>
			<Row justify="space-evenly" align="middle">
				{recentBuyers.map((aBuyer) => (
					<Col key={aBuyer.id} xs={24} sm={8} md={6}>
						<BuyerCard buyer={aBuyer} />
					</Col>
				))}
			</Row>
		</>
	);
}
