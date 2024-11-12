import { Col, Row, Typography } from "antd";
const { Text } = Typography;

export default function VisitorCount() {
	const visitorCount = 100;

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
