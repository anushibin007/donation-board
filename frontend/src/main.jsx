import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Constants from "./utils/Constants.js";
import Config from "./components/Config.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<BrowserRouter basename={Constants.BASE_PATH}>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/config" element={<Config />} />
			</Routes>
		</BrowserRouter>
	</StrictMode>
);
