import { Card } from "antd";
const { Meta } = Card;

export default function BuyerCard({ buyer }) {
	return (
		<>
			<Card
				style={{
					width: 300,
					boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
				}}
			>
				<Meta
					title={`${buyer?.name} bought a ${buyer?.item}`}
					description={`Thanks for the ₹${buyer.amount} !!!`}
				/>
			</Card>
		</>
	);
}
