import { Col, Row } from "antd";
import BuyerCard from "./BuyerCard";
import { useEffect, useState } from "react";
import Constants from "../utils/Constants";

export default function RecentBuyers() {
	const [recentBuyers, setRecentBuyers] = useState();

	useEffect(() => {
		fetchBuyersData();
		setInterval(() => {
			fetchBuyersData();
		}, 5000);
	}, []);

	const fetchBuyersData = async () => {
		const response = await fetch(`${Constants.BACKEND_SERVER_ROOT}/transactions`);
		const data = await response.json();
		const transactions = data?._embedded?.transactions;
		const totalTransactions = transactions?.length;
		if (totalTransactions) {
			setRecentBuyers(
				data?._embedded?.transactions?.slice(totalTransactions - 3, totalTransactions)
			);
		}
	};

	return (
		<>
			<Row justify="space-evenly" align="middle">
				{recentBuyers?.map((aBuyer) => (
					<Col key={aBuyer?._links?.self?.href} xs={24} sm={8} md={6}>
						<BuyerCard buyer={aBuyer} />
					</Col>
				))}
			</Row>
		</>
	);
}
