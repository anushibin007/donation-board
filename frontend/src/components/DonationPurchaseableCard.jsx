import { Card, Col, Row } from "antd";
const { Meta } = Card;

export default function DonationPurchaseableCard({ donatedAmount, purchaseableItem }) {
	const itemCount = Math.floor(donatedAmount / purchaseableItem?.cost);
	return (
		<>
			<Card
				style={{
					width: 220,
					boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
				}}
			>
				<Row gutter={16} align="middle">
					<Col xs={8} sm={6} md={4}>
						<img
							src={purchaseableItem?.imgurl}
							style={{ width: "100%", height: "100%" }}
						/>
					</Col>
					<Col xs={16} sm={18} md={20}>
						{`${itemCount} ${purchaseableItem.item}`}
					</Col>
				</Row>
			</Card>
		</>
	);
}
