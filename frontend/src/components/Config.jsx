import { Button, Form, InputNumber } from "antd";
import { useEffect, useState } from "react";
import Constants from "../utils/Constants";

export default function Config() {
	const [form] = Form.useForm();
	const [donationData, setDonationData] = useState();

	useEffect(() => {
		fetchDonationData();
	}, []);

	// Update form fields when donationData changes
	useEffect(() => {
		if (donationData) {
			form.setFieldsValue(donationData);
		}
	}, [donationData, form]);

	const fetchDonationData = async () => {
		const response = await fetch(`${Constants.BACKEND_SERVER_ROOT}/donations/1`);
		// if response is 404, create a new entity
		if (response.status === 404) {
			const newlyCreatedResponseData = await updateData();
			setDonationData(newlyCreatedResponseData);
		} else {
			const data = await response.json();
			setDonationData(data);
			console.log(data);
		}
	};

	const updateData = async (updatedData) => {
		if (!updatedData) {
			// Fill initial data if there is no data
			updatedData = {
				id: 1,
				totalDonation: 10000,
				boostAmount: 0,
				currentDonation: 0,
			};
		} else {
			// Get latest currentDonation first
			const response = await fetch(`${Constants.BACKEND_SERVER_ROOT}/donations/1`);
			const data = await response.json();
			updatedData.currentDonation = data.currentDonation;
		}

		const response = await fetch(`${Constants.BACKEND_SERVER_ROOT}/donations/1`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(updatedData),
		});
		return response.json();
	};

	const onFinish = (values) => {
		console.log("Success:", values);
		updateData({ id: 1, ...values });
	};
	const onFinishFailed = (errorInfo) => {
		console.log("Failed:", errorInfo);
	};

	return (
		<>
			<div>Config</div>
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
				autoComplete="off"
			>
				<Form.Item
					label="totalDonation"
					name="totalDonation"
					rules={[
						{
							required: true,
							message: "Please input totalDonation!",
						},
					]}
				>
					<InputNumber />
				</Form.Item>
				<Form.Item
					label="boostAmount"
					name="boostAmount"
					rules={[
						{
							required: true,
							message: "Please input boostAmount!",
						},
					]}
				>
					<InputNumber />
				</Form.Item>
				<Form.Item
					label="currentDonation"
					name="currentDonation"
					rules={[
						{
							required: true,
							message: "Please input currentDonation!",
						},
					]}
				>
					<InputNumber readOnly />
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
