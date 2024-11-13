import { Col, Row, Typography } from "antd";
import { useEffect, useState } from "react";
import Constants from "../utils/Constants";
const { Text } = Typography;

export default function VisitorCount() {
	const [visitorCount, setVisitorCount] = useState(50);

	useEffect(() => {
		fetchVisitorCount();
	}, []);

	const fetchVisitorCount = async () => {
		const response = await fetch(`${Constants.BACKEND_SERVER_ROOT}/visitorcount/1`);
		// if response is 404, create a new entity
		if (response.status === 404) {
			const newlyCreatedResponseData = await updateCount();
			setVisitorCount(newlyCreatedResponseData?.count);
		} else {
			const data = await response.json();
			setVisitorCount(data?.count);
			if (data) {
				updateCount({
					id: 1,
					count: data?.count + 1,
				});
			}
		}
	};

	const updateCount = async (countData) => {
		if (!countData) {
			countData = {
				id: 1,
				count: 0,
			};
		}

		const response = await fetch(`${Constants.BACKEND_SERVER_ROOT}/visitorcount/1`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(countData),
		});
		return response.json();
	};

	// const visitorCount = 100;

	const luckyWinner = () => {
		if (visitorCount % 100 === 0) {
			return true;
		}
		return false;
	};

	return (
		<>
			<Row justify="space-evenly">
				<Col xs={24}>
					<Text>Lucky visitor number: {visitorCount}</Text>
				</Col>
				{luckyWinner() && (
					<>
						<Col xs={24}>
							<Text type="danger">
								You won a lucky prize!!! Rush to the counter with this screenshot!!!
							</Text>
						</Col>
					</>
				)}
			</Row>
		</>
	);
}
