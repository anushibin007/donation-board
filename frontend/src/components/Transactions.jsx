import { Button, Form, Input, InputNumber } from "antd";
import Constants from "../utils/Constants";

export default function Transactions() {
	const [form] = Form.useForm();

	const updateData = async (updatedData) => {
		const response = await fetch(`${Constants.BACKEND_SERVER_ROOT}/transactions`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(updatedData),
		});
		return response.json();
	};

	const onFinish = (values) => {
		console.log("Success:", values);
		updateData(values);
	};
	const onFinishFailed = (errorInfo) => {
		console.log("Failed:", errorInfo);
	};

	return (
		<>
			<div>Transactions</div>
			<Form
				form={form}
				name="basic"
				labelCol={{
					span: 8,
				}}
				wrapperCol={{
					span: 16,
				}}
				style={{
					maxWidth: 600,
				}}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete="on"
			>
				<Form.Item
					label="name"
					name="name"
					rules={[
						{
							required: true,
							message: "Please input name!",
						},
					]}
				>
					<Input />
				</Form.Item>
				<Form.Item
					label="item"
					name="item"
					rules={[
						{
							required: true,
							message: "Please input item!",
						},
					]}
				>
					<Input />
				</Form.Item>
				<Form.Item
					label="amount"
					name="amount"
					rules={[
						{
							required: true,
							message: "Please input amount!",
						},
					]}
				>
					<InputNumber />
				</Form.Item>
				<Form.Item label={null}>
					<Button type="primary" htmlType="submit">
						Submit
					</Button>
				</Form.Item>
			</Form>
		</>
	);
}
