import { Col, Row } from "antd";
import DonationPurchaseableCard from "./DonationPurchaseableCard";

export default function DonationPurchaseables({ donatedAmount, totalDonation }) {
	const donationPurchasables = [
		{
			id: 1,
			item: "Chocolates",
			cost: 5,
			imgurl: "https://cococart.in/cdn/shop/files/1CH2580.png?v=1727972064",
		},
		{
			id: 2,
			item: "Books",
			cost: 300,
			imgurl: "https://static.scientificamerican.com/sciam/cache/file/1DDFE633-2B85-468D-B28D05ADAE7D1AD8_source.jpg",
		},
		{
			id: 3,
			item: "Shoes",
			cost: 600,
			imgurl: "https://thedapperman.in/cdn/shop/products/2_20ae6411-e058-4b28-ac12-02eb4e095840.jpg?v=1674749413&width=720",
		},
		{
			id: 4,
			item: "School Bags",
			cost: 800,
			imgurl: "https://safaribags.com/cdn/shop/files/Trio-15_BP_N_Teal_02.jpg?v=1707670998",
		},
	];
	return (
		<>
			<Row justify="space-evenly" align="middle">
				{donationPurchasables.map((aPurchaseable) => (
					<Col key={aPurchaseable.id} xs={24} sm={8} md={6}>
						<DonationPurchaseableCard
							donatedAmount={donatedAmount}
							totalDonation={totalDonation}
							purchaseableItem={aPurchaseable}
						/>
					</Col>
				))}
			</Row>
		</>
	);
}
