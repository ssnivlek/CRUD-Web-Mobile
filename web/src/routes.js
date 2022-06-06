import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/index";

export default function Routing() {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<Dashboard />} />
			</Routes>
		</BrowserRouter>
	);
}
